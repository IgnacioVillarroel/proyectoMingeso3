package com.mingeso3.preguntaservice.controllers;

import com.mingeso3.preguntaservice.entities.PreguntaEntity;
import com.mingeso3.preguntaservice.services.PreguntaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/preguntas")
public class PreguntaController {
    @Autowired
    PreguntaService preguntaService;

    @GetMapping("/faciles")
    public ResponseEntity<ArrayList<PreguntaEntity>> listadoFaciles(){
        ArrayList<PreguntaEntity> listaProblemas = preguntaService.obtenerFaciles();
        if(listaProblemas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(listaProblemas);
    }

    @GetMapping("/intermedias")
    public ResponseEntity<ArrayList<PreguntaEntity>> listadoIntermedias(){
        ArrayList<PreguntaEntity> listaProblemas = preguntaService.obtenerIntermedias();
        if(listaProblemas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(listaProblemas);
    }

    @GetMapping("/dificiles")
    public ResponseEntity<ArrayList<PreguntaEntity>> listadoDificiles(){
        ArrayList<PreguntaEntity> listaProblemas = preguntaService.obtenerDificiles();
        if(listaProblemas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(listaProblemas);
    }

    @PostMapping
    public ResponseEntity<PreguntaEntity> agregarNuevaPregunta(@RequestBody PreguntaEntity nuevaPregunta) {
        PreguntaEntity preguntaGuardada = preguntaService.guardarPregunta(nuevaPregunta);
        return new ResponseEntity<>(preguntaGuardada, HttpStatus.CREATED);
    }
}
