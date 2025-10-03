package com.example.myproject.service;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

import java.util.List;
import java.util.Map;

@Service
public class OllamaService {

    private final WebClient webClient;

    public OllamaService(WebClient.Builder builder) {
        this.webClient = builder.baseUrl("http://localhost:11434").build();
    }

    public String generateRecipe(List<String> ingredients) {
        String prompt = "You are a helpful recipe assistant. Suggest a quick, healthy recipe using only these ingredients: "
                + String.join(", ", ingredients);

        Map<String, Object> requestBody = Map.of(
                "model", "llama2",  // must match a pulled Ollama model (e.g. llama2, mistral, codellama)
                "prompt", prompt
        );

        // Ollama streams responses line by line
        Flux<Map> responseFlux = this.webClient.post()
                .uri("/api/generate")
                .bodyValue(requestBody)
                .retrieve()
                .bodyToFlux(Map.class);

        StringBuilder finalResponse = new StringBuilder();

        responseFlux
                .doOnNext(chunk -> {
                    Object part = chunk.get("response");
                    if (part != null) {
                        finalResponse.append(part.toString());
                    }
                })
                .blockLast(); // wait until all chunks received

        return finalResponse.toString().trim();
    }
}
