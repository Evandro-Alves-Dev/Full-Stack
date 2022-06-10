package br.com.treinaweb.adoteumpet.api.pet.services;

import br.com.treinaweb.adoteumpet.api.pet.dtos.PetRequest;
import br.com.treinaweb.adoteumpet.api.pet.dtos.PetResponse;
import br.com.treinaweb.adoteumpet.api.pet.mappers.PetMapper;
import br.com.treinaweb.adoteumpet.core.repositories.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
public class PetService {

    @Autowired
    private PetRepository petRepository;

    @Autowired
    protected PetMapper petMapper;

    public List<PetResponse> findAll() {
        return petRepository.findAll()
                .stream()
                .map(petMapper::toResponse)
                .toList();
    }

    public PetResponse create(PetRequest petRequest){
        var petCreate = petMapper.toModel(petRequest);
        return petMapper.toResponse(petRepository.save(petCreate));
    }
}
