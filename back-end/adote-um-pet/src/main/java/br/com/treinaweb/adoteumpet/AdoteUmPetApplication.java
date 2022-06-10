package br.com.treinaweb.adoteumpet;

import br.com.treinaweb.adoteumpet.core.models.Pet;
import br.com.treinaweb.adoteumpet.core.repositories.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AdoteUmPetApplication implements CommandLineRunner {

	@Autowired
	private PetRepository petRepository;

	public static void main(String[] args) {
		SpringApplication.run(AdoteUmPetApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		var pet = new Pet();
		pet.setNome("Kiko");
		pet.setFoto("https://st3.depositphotos.com/28951978/31933/i/600/depositphotos_319331898-stock-photo-pet-dog-sleeping-comfortably-curled.jpg");
		pet.setHistoria("Este lindo cachorro precisa de um lar cheio de carinho e amor.");
		petRepository.save(pet);
	}
}
