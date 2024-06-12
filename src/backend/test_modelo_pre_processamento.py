import unittest
from modelo_pre_processamento import prever_intencao

class TestModeloPreProcessamento(unittest.TestCase):

    def test_prever_intencao_financeira(self):
        texto = "Como posso investir meu dinheiro?"
        intencao_esperada = "finanças"
        intencao_obtida = prever_intencao(texto)
        self.assertEqual(intencao_esperada, intencao_obtida)

    def test_prever_intencao_programacao(self):
        texto = "Gostaria de aprender Python."
        intencao_esperada = "programação"
        intencao_obtida = prever_intencao(texto)
        self.assertEqual(intencao_esperada, intencao_obtida)

    # def test_prever_intencao_inexistente(self):
    #     texto = "Quero saber sobre viagens espaciais."
    #     # Supondo que "viagens espaciais" não esteja no conjunto de dados de treinamento
    #     intencao_esperada = "finanças" # ou "programação", dependendo de como o modelo foi treinado para lidar com desconhecidos
    #     intencao_obtida = prever_intencao(texto)
    #     self.assertNotEqual(intencao_esperada, intencao_obtida)

    # def test_prever_intencao_texto_vazio(self):
    #     texto = ""
    #     # Supondo que a função deveria lidar com texto vazio retornando None ou uma string vazia
    #     intencao_esperada = None
    #     intencao_obtida = prever_intencao(texto)
    #     self.assertIsNone(intencao_obtida)

if __name__ == '__main__':
    unittest.main()
