package com.example.myproject.controller;




import com.example.myproject.service.OllamaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class RecipeController {

    private final OllamaService ollamaService;

    public RecipeController(OllamaService ollamaService) {
        this.ollamaService = ollamaService;
    }

    @GetMapping("/products")
    public List<String> getProducts() {
        return List.of("Carrots", "Kale", "Tomatoes", "Organic Eggs");
    }

    @PostMapping("/recipe")
    public String getRecipe(@RequestBody RecipeRequest request) {
        return ollamaService.generateRecipe(request.getIngredients());
    }

    public static class RecipeRequest {
        private List<String> ingredients;
        public List<String> getIngredients() { return ingredients; }
        public void setIngredients(List<String> ingredients) { this.ingredients = ingredients; }
    }
}
