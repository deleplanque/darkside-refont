package com.darkzone.darkside.contolleurs;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.darkzone.darkside.entite.Salle;
import com.darkzone.darkside.services.ISallesService;

@Controller
@RequestMapping("/api")
public class SallesControlleur {

	@Autowired
	ISallesService sallesService;


	@RequestMapping(value = "/getSalles", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Salle>> getSalles() {
		return new ResponseEntity<List<Salle>>(sallesService.getSalles(), HttpStatus.OK);
	}

}
