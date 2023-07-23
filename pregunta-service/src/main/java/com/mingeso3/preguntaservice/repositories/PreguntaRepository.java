package com.mingeso3.preguntaservice.repositories;

import com.mingeso3.preguntaservice.entities.PreguntaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface PreguntaRepository extends JpaRepository<PreguntaEntity, Integer> {
    @Query  (value = "SELECT * FROM preguntas WHERE tipo = 'facil' ORDER BY RAND() LIMIT 4", nativeQuery = true)
    ArrayList<PreguntaEntity> findRandomFaciles();

    @Query  (value = "SELECT * FROM preguntas WHERE tipo = 'intermedio' ORDER BY RAND() LIMIT 4", nativeQuery = true)
    ArrayList<PreguntaEntity> findRandomIntermedias();

    @Query  (value = "SELECT * FROM preguntas WHERE tipo = 'dificil' ORDER BY RAND() LIMIT 4", nativeQuery = true)
    ArrayList<PreguntaEntity> findRandomDificiles();
}
