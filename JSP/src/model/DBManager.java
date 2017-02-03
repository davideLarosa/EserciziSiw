package model;

import java.util.ArrayList;
import java.util.List;

public class DBManager {

	private static DBManager instance = null;
	
	public List<Contatto> contatti = new ArrayList<Contatto>();
	public List<Telefono> telefoni = new ArrayList<Telefono>();
	public List<Messaggio> messaggio = new ArrayList<Messaggio>();
	public List<ContattiTelefono> contattiTelefono = new ArrayList<ContattiTelefono>();

	public static DBManager getInstance() {
		if (instance == null)
			instance = new DBManager();
		return instance;
	}

	private DBManager() {
	}

}
