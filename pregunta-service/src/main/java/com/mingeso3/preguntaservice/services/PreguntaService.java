package com.mingeso3.preguntaservice.services;

import com.mingeso3.preguntaservice.entities.PreguntaEntity;
import com.mingeso3.preguntaservice.repositories.PreguntaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class PreguntaService {
    @Autowired
    private PreguntaRepository preguntaRepository;

    public ArrayList<PreguntaEntity> obtenerFaciles() { return (ArrayList<PreguntaEntity>) preguntaRepository.findRandomFaciles();}

    public ArrayList<PreguntaEntity> obtenerIntermedias() { return (ArrayList<PreguntaEntity>) preguntaRepository.findRandomIntermedias();}

    public ArrayList<PreguntaEntity> obtenerDificiles() { return (ArrayList<PreguntaEntity>) preguntaRepository.findRandomDificiles();}

    public PreguntaEntity guardarPregunta(PreguntaEntity nuevaPregunta) {
        return preguntaRepository.save(nuevaPregunta);
    }
}
