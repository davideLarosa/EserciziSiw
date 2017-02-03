package model;

public class Telefono {
	private String codiceImei;
	private String modello;
	private String sistemaOperativo;

	public Telefono() {
	}

	public Telefono(String codiceImei, String modello, String sistemaOperativo) {
		this.codiceImei = codiceImei;
		this.modello = modello;
		this.sistemaOperativo = sistemaOperativo;
	}

	public String getCodiceImei() {
		return codiceImei;
	}

	public void setCodiceImei(String codiceImei) {
		this.codiceImei = codiceImei;
	}

	public String getModello() {
		return modello;
	}

	public void setModello(String modello) {
		this.modello = modello;
	}

	public String getSistemaOperativo() {
		return sistemaOperativo;
	}

	public void setSistemaOperativo(String sistemaOperativo) {
		this.sistemaOperativo = sistemaOperativo;
	}

}
