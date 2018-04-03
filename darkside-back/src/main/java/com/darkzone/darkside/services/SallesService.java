package com.darkzone.darkside.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.darkzone.darkside.dao.ISallesDAO;
import com.darkzone.darkside.entite.Salle;

@Service
public class SallesService implements ISallesService {

	@Autowired
	ISallesDAO salleDAO;

	@Override
	public List<Salle> getSalles() {
		return salleDAO.findAll();
	}

}
