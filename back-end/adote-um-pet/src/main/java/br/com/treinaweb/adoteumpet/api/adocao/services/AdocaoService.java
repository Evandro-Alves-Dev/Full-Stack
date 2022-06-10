package br.com.treinaweb.adoteumpet.api.adocao.services;

import br.com.treinaweb.adoteumpet.api.adocao.dtos.AdocaoRequest;
import br.com.treinaweb.adoteumpet.api.adocao.dtos.AdocaoResponse;
import br.com.treinaweb.adoteumpet.api.adocao.mappers.AdocaoMapper;
import br.com.treinaweb.adoteumpet.core.repositories.AdocaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class AdocaoService {

    @Autowired
    private AdocaoRepository adocaoRepository;

    @Autowired
    private AdocaoMapper adocaoMapper;

    public AdocaoResponse create (AdocaoRequest adocaoRequest) {
        var adocao = adocaoMapper.toModel(adocaoRequest);
        var createdAdocao = adocaoRepository.save(adocao);
        var adocaoResponse = adocaoMapper.toResponse(createdAdocao);
        return adocaoResponse;
    }

    public List<AdocaoResponse> findAll(){
        var list = adocaoRepository.findAll();
        return list.stream()
            .map((adocao) -> adocaoMapper.toResponse(adocao))
            .collect(Collectors.toList());
    }
}
