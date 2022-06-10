package br.com.treinaweb.adoteumpet.api.adocao.dtos;

import br.com.treinaweb.adoteumpet.api.pet.validators.PetExistsById;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.*;
import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class AdocaoRequest {

    @NotNull
    @NotEmpty
    @Email
    @Size(max = 255)
    private String email;

    @NotNull
    @Min(10)
    @Max(100)
    private BigDecimal valor;

    @NotNull
    @Positive
    @PetExistsById
    private Long petId;
}
