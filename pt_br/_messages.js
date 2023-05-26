// -*- mode: java; c-basic-offset: 2; -*-	.																								
// Copyright © 2018 Kodular. All rights reserved.																									
																									
/**																									
* Visual Blocks Language																									
*																									
* Copyright © 2018 Kodular. All rights reserved.																									
*/																									
																									
/**																									
 * @fileoverview Brazilian Portuguese strings.
 */
'use strict';

goog.provide('AI.Blockly.Msg.pt_br');

goog.require('Blockly.Msg.pt.br');																					
																									
/**																									
* Due to the frequency of long strings, the 80-column wrap rule need not apply																									
* to message files.																									
*/																									
																									
Blockly.Msg.en.switch_language_to_english ={																								
  // Switch language to English.																									
  category: '',																									
  helpUrl: '',																									
  init: function() {																									
// Context menus.																									
	Blockly.Msg.UNDO = 'Desfazer';																								
	Blockly.Msg.REDO = 'Refazer ';																								
	Blockly.Msg.CLEAN_UP = 'Limpar Blocos';																								
	Blockly.Msg.HIDE = 'Ocultar controles de espaço de trabalho';																								
	Blockly.Msg.SHOW = 'Mostrar controles da área de trabalho';																								
	Blockly.Msg.DUPLICATE_BLOCK = 'Duplicado';																								
	Blockly.Msg.REMOVE_COMMENT = 'Remover comentário ';																								
	Blockly.Msg.ADD_COMMENT = 'Adicionar comentário';																								
	Blockly.Msg.EXTERNAL_INPUTS = 'Entradas externas';																								
	Blockly.Msg.INLINE_INPUTS = 'Entradas em linha';																								
	Blockly.Msg.HORIZONTAL_PARAMETERS = 'Organizar Parâmetros horizontalmente ';																								
	Blockly.Msg.VERTICAL_PARAMETERS = 'Organizar Parâmetros verticalmente ';																								
	Blockly.Msg.CONFIRM_DELETE = 'Confirmar exclusão ';																								
	Blockly.Msg.DELETE_ALL_BLOCKS = 'Apagar tudo %1 blocos? ';																								
	Blockly.Msg.DELETE_BLOCK = 'Excluir bloco ';																								
	Blockly.Msg.DELETE_X_BLOCKS = 'Excluir %1 Blocos';																								
	Blockly.Msg.COLLAPSE_BLOCK = 'O colapso do bloco ';																								
	Blockly.Msg.EXPAND_BLOCK = 'Expandir bloco ';																								
	Blockly.Msg.DISABLE_BLOCK = 'Desativar Bloquear ';																								
	Blockly.Msg.ENABLE_BLOCK = 'Habilitar Bloquear ';																								
	Blockly.Msg.HELP = 'Socorro';																								
	Blockly.Msg.EXPORT_IMAGE = 'Baixar blocos como Imagem ';																								
	Blockly.Msg.COLLAPSE_ALL = 'Recolher Blocos';																								
	Blockly.Msg.EXPAND_ALL = 'Expandir Blocos';																								
	Blockly.Msg.ARRANGE_H = 'Organizar Blocos horizontalmente ';																								
	Blockly.Msg.ARRANGE_V = 'Organizar Blocos verticalmente ';																								
	Blockly.Msg.ARRANGE_S = 'Organizar Blocos Diagonal ';																								
	Blockly.Msg.SORT_W = 'Classificar Blocos por Largura ';																								
	Blockly.Msg.SORT_H = 'Classificar Blocos pela altura ';																								
	Blockly.Msg.SORT_C = 'Classificar Blocos por categoria ';																								
	Blockly.Msg.COPY_TO_BACKPACK = 'Adicionar a mochila';																								
	Blockly.Msg.COPY_ALLBLOCKS = 'Copiar todos os blocos para Mochila';																								
	Blockly.Msg.REMOVE_FROM_BACKPACK = 'Retire da Mochila';																								
	Blockly.Msg.BACKPACK_GET = 'Cole todos os blocos da Mochila';																								
	Blockly.Msg.BACKPACK_EMPTY = 'Esvaziar a Mochila';																								
	Blockly.Msg.BACKPACK_CONFIRM_EMPTY = 'Tem certeza de que deseja esvaziar a Mochila? ';																								
	Blockly.Msg.BACKPACK_DOC_TITLE = 'Informações Mochila ';																								
	Blockly.Msg.SHOW_BACKPACK_DOCUMENTATION = 'Mostrar a documentação Mochila ';																								
	Blockly.Msg.BACKPACK_DOCUMENTATION = 'A Mochila é funcionalidade de copiar / colar. Ela permite que você copiar blocos de um projeto ou na tela e colá-los em outro projeto ou na tela. Para copiar, você pode arrastar e soltar os blocos dentro da mochila. Para colar, clique no ícone Mochila e blocos de arrastar-e-soltar no espaço de trabalho. </ P> <p> Se você deixar Kodular com blocos deixados em sua mochila, eles vão estar lá na próxima vez que você login. </ P> <p> Para mais documentação e um vídeo 'como', consulte:'
	+'</p><p><a href="https://docs.kodular.io/guides/backpack" target="_blank">https://docs.kodular.io/guides/backpack</a>';																																															
	Blockly.Msg.ENABLE_GRID = 'Ativar Área de Trabalho Grid ';																								
	Blockly.Msg.DISABLE_GRID = 'Desativar Área de Trabalho Grid ';																								
	Blockly.Msg.ENABLE_SNAPPING = 'Ativar Snap to Grid ';																								
	Blockly.Msg.DISABLE_SNAPPING = 'Desativar Snap to Grid ';																								
	Blockly.Msg.DISABLE_ALL_BLOCKS = 'Desativar todos os Blocos';																								
	Blockly.Msg.ENABLE_ALL_BLOCKS = 'Permitir que todos os blocos';																								
	Blockly.Msg.HIDE_ALL_COMMENTS = 'Ocultar todos os comentários';																								
	Blockly.Msg.SHOW_ALL_COMMENTS = 'Mostrar todos os comentários';																								
	Blockly.Msg.GENERICIZE_BLOCK = 'Faça genérico ';																								
	Blockly.Msg.UNGENERICIZE_BLOCK = 'Fazer específico ';																								
	Blockly.Msg.DOWNLOAD_BLOCKS_AS_PNG = 'Baixar blocos como PNG ';																								
																									
// Variable renaming.																									
	Blockly.Msg.CHANGE_VALUE_TITLE = 'Alterar o valor: ';																								
	Blockly.Msg.NEW_VARIABLE = 'Nova variável ... ';																								
	Blockly.Msg.NEW_VARIABLE_TITLE = 'Novo nome da variável: ';																								
	Blockly.Msg.RENAME_VARIABLE = 'Renomear variável ... ';																								
	Blockly.Msg.RENAME_VARIABLE_TITLE = 'Renomeie todas as variáveis ​​" %1" para: ';																								
																									
// Toolbox.																									
	Blockly.Msg.VARIABLE_CATEGORY = 'Variáveis';																								
	Blockly.Msg.PROCEDURE_CATEGORY = 'Procedimentos';																								
																									
// Warnings/Errors																									
	Blockly.Msg.ERROR_BLOCK_CANNOT_BE_IN_DEFINTION = 'Este bloco não pode estar em uma definição ';																								
	Blockly.Msg.ERROR_SELECT_VALID_ITEM_FROM_DROPDOWN = 'Selecione um item válido no drop-down. ';																								
	Blockly.Msg.ERROR_DUPLICATE_EVENT_HANDLER = 'Este é um manipulador de eventos duplicado para este componente. ';																								
	Blockly.Msg.ERROR_COMPONENT_DOES_NOT_EXIST = 'O componente não existe ';																								
	Blockly.Msg.ERROR_BLOCK_IS_NOT_DEFINED = 'Este bloco não está definido. Excluir este bloco ';																								
	Blockly.Msg.ERROR_BREAK_ONLY_IN_LOOP = 'O bloco de ruptura deve ser utilizado apenas no meio de ciclos';																								
	Blockly.Msg.ERROR_INVALID_NUMBER_CONTENT = 'Este bloco de texto não contém um número válido ';																								
																									
// Colour Blocks.																									
	Blockly.Msg.LANG_COLOUR_PICKER_HELPURL = 'https://docs.kodular.io/Blocos/colors#basic ';																								
	Blockly.Msg.LANG_COLOUR_PICKER_TOOLTIP = 'Clique no quadrado para escolher uma cor. ';																								
	Blockly.Msg.LANG_COLOUR_WHITE = 'branco';																								
	Blockly.Msg.LANG_COLOUR_LIGHT_GRAY = 'cinza claro';																								
	Blockly.Msg.LANG_COLOUR_GRAY = 'cinzento';																								
	Blockly.Msg.LANG_COLOUR_BLUE_GRAY = 'cinza azulado';																								
	Blockly.Msg.LANG_COLOUR_DARK_GRAY = 'cinza escuro';																								
	Blockly.Msg.LANG_COLOUR_BLACK = 'preto';																								
	Blockly.Msg.LANG_COLOUR_RED = 'vermelho';																								
	Blockly.Msg.LANG_COLOUR_PINK = 'Rosa';																								
	Blockly.Msg.LANG_COLOUR_PURPLE = 'roxa';																								
	Blockly.Msg.LANG_COLOUR_DEEP_PURPLE = 'roxo profundo';																								
	Blockly.Msg.LANG_COLOUR_INDIGO = 'índigo';																								
	Blockly.Msg.LANG_COLOUR_BLUE = 'azul';																								
	Blockly.Msg.LANG_COLOUR_LIGHT_BLUE = 'azul claro';																								
	Blockly.Msg.LANG_COLOUR_CYAN = 'ciano';																								
	Blockly.Msg.LANG_COLOUR_TEAL = 'azul-esverdeado';																								
	Blockly.Msg.LANG_COLOUR_GREEN = 'verde';																								
	Blockly.Msg.LANG_COLOUR_LIGHT_GREEN = 'luz verde';																								
	Blockly.Msg.LANG_COLOUR_LIME = 'lima';																								
	Blockly.Msg.LANG_COLOUR_YELLOW = 'amarelo';																								
	Blockly.Msg.LANG_COLOUR_AMBER = 'âmbar';																								
	Blockly.Msg.LANG_COLOUR_ORANGE = 'laranja';																								
	Blockly.Msg.LANG_COLOUR_DEEP_ORANGE = 'laranja profunda ';																								
	Blockly.Msg.LANG_COLOUR_BROWN = 'castanho';																								
	Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR = 'cor divisão ';																								
	Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR_HELPURL = 'https://docs.kodular.io/Blocos/colors#split ';																								
	Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR_TOOLTIP = 'Uma lista de quatro elementos, cada um na gama de 0 a 255, representando o vermelho, verde, azul e alfa componentes.';																								
	Blockly.Msg.LANG_COLOUR_MAKE_COLOUR = 'Fazer cor';																								
	Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_HELPURL = 'https://docs.kodular.io/Blocos/colors#make ';																								
	Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_TOOLTIP = 'Uma cor com o dado vermelho, verde, azul, e, opcionalmente, componentes alfa';																								
																									
// Control Blocks																									
	Blockly.Msg.LANG_CATEGORY_CONTROLS = 'Controle';																								
	Blockly.Msg.LANG_CONTROLS_IF_HELPURL = 'https://docs.kodular.io/Blocos/control#if ';																								
	Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_1 = 'Se um valor for verdadeiro, em seguida, fazer algumas declarações. ';																								
	Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_2 = 'Se um valor for verdadeiro, em seguida, fazer o primeiro bloco de instruções.\nCaso contrário, fazer o segundo bloco de instruções. ';																								
	Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_3 = 'Se o primeiro valor é verdadeiro, em seguida, fazer o primeiro bloco de instruções.\nCaso contrário, se o segundo valor é verdade, fazer o segundo bloco de instruções. ';																								
	Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_4 = 'Se o primeiro valor é verdadeiro, em seguida, fazer o primeiro bloco de instruções.\nCaso contrário, se o segundo valor é verdade, fazer o segundo bloco de instruções. Se nenhum dos valores são verdadeiros, fazer o último bloco de instruções. ';																								
	Blockly.Msg.LANG_CONTROLS_IF_MSG_IF = 'Se';																								
	Blockly.Msg.LANG_CONTROLS_IF_MSG_ELSEIF = 'Senão, se ';																								
	Blockly.Msg.LANG_CONTROLS_IF_MSG_ELSE = 'Outro';																								
	Blockly.Msg.LANG_CONTROLS_IF_MSG_THEN = 'Então';																								
																										
	Blockly.Msg.LANG_CONTROLS_IF_IF_TITLE_IF = 'Se';																								
	Blockly.Msg.LANG_CONTROLS_IF_IF_TOOLTIP = 'Adicionar, remover ou reorganizar seções\nreconfigurar isso se bloco. ';																								
																										
	Blockly.Msg.LANG_CONTROLS_IF_ELSEIF_TITLE_ELSEIF = 'Senão, se';																								
	Blockly.Msg.LANG_CONTROLS_IF_ELSEIF_TOOLTIP = 'Adicionar uma condição ao se bloco. ';																								
																										
	Blockly.Msg.LANG_CONTROLS_IF_ELSE_TITLE_ELSE = 'outro';																								
	Blockly.Msg.LANG_CONTROLS_IF_ELSE_TOOLTIP = 'Adicionar uma final, pega-tudo condição para o bloco se .';																								
																										
	Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_HELPURL = 'https://docs.kodular.io/Blocos/control#while ';																								
	Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TITLE_REPEAT = 'repetir';																								
	Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_INPUT_DO = 'Faz';																								
	Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE = 'enquanto';																								
	Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = 'até';																								
	Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = 'Enquanto que um valor é verdadeiro, em seguida, fazer algumas declarações.';																								
	Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = 'Enquanto que um valor é falso, em seguida, fazer algumas declarações.';																								
	Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_1 = 'Executa os blocos na seção \'fazer\', enquanto o teste é verdadeiro. ';																								
																										
	Blockly.Msg.LANG_CONTROLS_FOR_HELPURL = '';																								
	Blockly.Msg.LANG_CONTROLS_FOR_INPUT_WITH = 'Para';																								
	Blockly.Msg.LANG_CONTROLS_FOR_INPUT_VAR = 'x';																								
	Blockly.Msg.LANG_CONTROLS_FOR_INPUT_FROM = 'de';																								
	Blockly.Msg.LANG_CONTROLS_FOR_INPUT_TO = 'para';																								
	Blockly.Msg.LANG_CONTROLS_FOR_INPUT_DO = 'Faz';																								
																										
	Blockly.Msg.LANG_CONTROLS_FOR_TOOLTIP = 'Contagem de um número inicial para um número final.\nPara cada contagem, defina o número contagem atual de\nvariável " %1", e em seguida, fazer algumas declarações. ';																								
																										
	Blockly.Msg.LANG_CONTROLS_FORRANGE_HELPURL = 'https://docs.kodular.io/Blocos/control#forrange ';																								
	Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_ITEM = 'Para cada';																								
	Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_VAR = 'número';																								
	Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_START = 'de';																								
	Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_END = 'para';																								
	Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_STEP = 'de';																								
	Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_DO = 'Faz';																								
	Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_TEXT = 'para o número no intervalo ';																								
	Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_PREFIX = 'para';																								
	Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_SUFFIX = 'na gama ';																								
	Blockly.Msg.LANG_CONTROLS_FORRANGE_TOOLTIP = 'Executa os blocos na seção \'fazer\' para cada valor numérico no intervalo do início ao fim, pisando o valor de cada vez. Use o nome da variável dada para se referir ao valor atual. ';																								
																										
	Blockly.Msg.LANG_CONTROLS_FOREACH_HELPURL = 'https://docs.kodular.io/Blocos/control#foreach ';																								
	Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_ITEM = 'Para cada';																								
	Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_VAR = 'item';																								
	Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_INLIST = 'na lista';																								
	Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_DO = 'Faz';																								
	Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_TEXT = 'para o item na lista de ';																								
	Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_PREFIX = 'para';																								
	Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_SUFFIX = 'na lista';																								
	Blockly.Msg.LANG_CONTROLS_FOREACH_TOOLTIP = 'Executa os blocos na \'fazer\' seção para cada item na lista. Use o nome da variável dada para se referir ao item da lista atual. ';																								
																										
	Blockly.Msg.LANG_CONTROLS_FOREACH_DICT_HELPURL = 'https://docs.kodular.io/Blocos/control#foreachdict ';																								
	Blockly.Msg.LANG_CONTROLS_FOREACH_DICT_INPUT = 'para cada %1 com %2 no dicionário %3' ;																								
	Blockly.Msg.LANG_CONTROLS_FOREACH_DICT_INPUT_DO = 'Faz';																								
	Blockly.Msg.LANG_CONTROLS_FOREACH_DICT_INPUT_KEY = 'chave';																								
	Blockly.Msg.LANG_CONTROLS_FOREACH_DICT_INPUT_VALUE = 'valor';																								
	// Used by the typeblock system.																									
	Blockly.Msg.LANG_CONTROLS_FOREACH_DICT_TITLE = 'para cada no dicionário ';																								
	Blockly.Msg.LANG_CONTROLS_FOREACH_DICT_TOOLTIP = 'Executa os blocos na \'fazer\' seção para cada entrada de valor-chave no dicionário. Use os dados nomes de variáveis ​​para se referir a chave / valor do item dicionário atual. ';																								
																										
	Blockly.Msg.LANG_CONTROLS_GET_HELPURL = 'https://docs.kodular.io/Blocos/control#get ';																																																	
																										
	Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_HELPURL = 'http://en.wikipedia.org/wiki/Control_flow ';																								
	Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP = 'de malha ';																								
	Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = 'saia';																								
	Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = 'continuar com a próxima iteração ';																								
	Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = 'Quebrar fora do circuito contendo .';																								
	Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = 'Ignore o resto deste loop, e US\ncontinuar com a próxima iteração. ';																								
	Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_WARNING = 'Aviso:\nEste bloco só podem\nser usado dentro de um loop. ';																								
																										
	Blockly.Msg.LANG_CONTROLS_WHILE_HELPURL = 'https://docs.kodular.io/Blocos/control#while ';																								
	Blockly.Msg.LANG_CONTROLS_WHILE_TITLE = 'enquanto';																								
	Blockly.Msg.LANG_CONTROLS_WHILE_INPUT_TEST = 'teste';																								
	Blockly.Msg.LANG_CONTROLS_WHILE_INPUT_DO = 'Faz';																								
	Blockly.Msg.LANG_CONTROLS_WHILE_COLLAPSED_TEXT = 'enquanto';																								
	Blockly.Msg.LANG_CONTROLS_WHILE_TOOLTIP = 'Executa os blocos na seção \'fazer \', enquanto o teste é verdadeiro. ';																								
																										
	Blockly.Msg.LANG_CONTROLS_CHOOSE_HELPURL = 'https://docs.kodular.io/Blocos/control#choose ';																								
	Blockly.Msg.LANG_CONTROLS_CHOOSE_TITLE = 'E se';																								
	Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_TEST = '';																								
	Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_THEN_RETURN = 'então';																								
	Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_ELSE_RETURN = 'outro';																								
	Blockly.Msg.LANG_CONTROLS_CHOOSE_COLLAPSED_TEXT = 'E se';																								
	Blockly.Msg.LANG_CONTROLS_CHOOSE_TOOLTIP = 'Se a condição a ser testado é verdadeiro, devolver o resultado da avaliação da expressão ligada ao \'então-retorno \' ranhura; caso contrário retorna o resultado da avaliação da expressão ligada ao \' caso contrário\' retorno fenda; no máximo um dos serão avaliadas as expressões abertura de retorno. ';																								
																										
	Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_HELPURL = 'https://docs.kodular.io/Blocos/control#doreturn ';																								
	Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_INPUT_DO = 'Faz';																								
	Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_INPUT_RETURN = 'resultado';																								
	Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_TOOLTIP = 'Executa os blocos em \'fazer \' e retorna um comunicado. Útil se você precisa para executar um procedimento antes de devolver um valor a uma variável. ';																								
	Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_COLLAPSED_TEXT = 'fazer resultado ';																								
	Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_TITLE = 'fazer resultado ';																								
																										
	Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_TITLE = 'avaliar, mas ignoram resultado ';																								
	Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_HELPURL = 'https://docs.kodular.io/Blocos/control#evaluate ';																								
	Blockly.Msg.LANG_CONTROLS_EVAL_BUT_COLLAPSED_TEXT = 'Avaliar mas ignorar ';																								
	Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_TOOLTIP = 'Executa o bloco conectado de código e ignora o valor de retorno (se houver). Útil se necessidade de chamar um procedimento com um valor de retorno, mas não precisa o valor.';																								
																										
	/* [lyn, 10/14/13] Removed for now. May come back some day.																									
	Blockly.Msg.LANG_CONTROLS_NOTHING_TITLE = 'nada';																								
	Blockly.Msg.LANG_CONTROLS_NOTHING_HELPURL = 'https://docs.kodular.io/Blocos/control#nothing ';																								
	Blockly.Msg.LANG_CONTROLS_NOTHING_TOOLTIP = 'Não retorna nada. Usado para inicializar variáveis ​​ou pode ser ligado a uma tomada de retorno se nenhum valor necessário para voltar. isto é equivalente a um valor nulo ou Nenhum .';																								
	*/																									
																										
	Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_HELPURL = 'https://docs.kodular.io/Blocos/control#openscreen ';																								
	Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_TITLE = 'abrir outra tela ';																								
	Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_INPUT_SCREENNAME = 'Nome do Tela';																								
	Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_COLLAPSED_TEXT = 'tela aberta ';																								
	Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_TOOLTIP = 'Abre uma nova tela em um aplicativo de tela múltipla. ';

	Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_HELPURL = 'https://docs.kodular.io/Blocos/control#openscreenwithvalue ';																								
	Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_TITLE = 'abrir outra tela com valor inicial ';																								
	Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_INPUT_SCREENNAME = 'Nome do Tela';																								
	Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_INPUT_STARTVALUE = 'Valor Inicial ';																								
	Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_COLLAPSED_TEXT = 'tela aberta com valor ';																								
	Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_TOOLTIP = 'Abre uma nova tela em um aplicativo de tela múltipla e passa o valor inicial para a tela. ';																								
																										
	Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_HELPURL = 'https://docs.kodular.io/Blocos/control#getstartvalue ';																								
	Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_TITLE = 'obter o valor start ';																								
	Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_INPUT_SCREENNAME = 'Nome do Tela';																								
	Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_INPUT_STARTVALUE = 'Valor Inicial ';																								
	Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_COLLAPSED_TEXT = 'obter o valor start ';																								
	Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_TOOLTIP = 'Retorna o valor que foi passado para esta tela quando foi aberto, tipicamente por outra tela em um aplicativo de tela múltipla. Se nenhum valor foi passado, retorna um texto vazio. ';																								
																										
	Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_HELPURL = 'https://docs.kodular.io/Blocos/control#closescreen ';																								
	Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_TITLE = 'tela close ';																								
	Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_COLLAPSED_TEXT = 'tela close ';																								
	Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_TOOLTIP = 'Feche a tela atual ';																								
																										
	Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_HELPURL = 'https://docs.kodular.io/Blocos/control#closescreenwithvalue ';																								
	Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_TITLE = 'perto da tela com o valor ';																								
	Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_INPUT_RESULT = 'resultado';																								
	Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_COLLAPSED_TEXT = 'perto da tela com o valor ';																								
	Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_TOOLTIP = 'Fecha a tela atual e retorna um resultado para a tela que abriu este. ';																								
																										
	Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_HELPURL = 'https://docs.kodular.io/Blocos/control#closeapp ';																								
	Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_TITLE = 'Fechar aplicação';																								
	Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_COLLAPSED_TEXT = 'Fechar aplicação';																								
	Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_TOOLTIP = 'Fecha todas as telas neste aplicativo e para o aplicativo. ';																								
																										
	Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_HELPURL = 'https://docs.kodular.io/Blocos/control#getplainstarttext ';																								
	Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_TITLE = 'fazer um texto início simples ';																								
	Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_COLLAPSED_TEXT = 'fazer um texto início plain ';																								
	Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_TOOLTIP = 'Retorna o texto simples que foi passado para esta tela quando foi iniciado por outro aplicativo. Se nenhum valor foi aprovada, retorna o texto vazio. Para vários aplicativos em tela, use Get começar valor, em vez de fazer um texto início plain. ';																								
																										
	Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_HELPURL = 'https://docs.kodular.io/Blocos/control#closescreenwithplaintext ';																								
	Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_TITLE = 'perto da tela com texto simples ';																								
	Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_INPUT_TEXT = 'texto';																								
	Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_COLLAPSED_TEXT = 'perto da tela com texto simples ';																								
	Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_TOOLTIP = 'Fecha a tela e retorna atual texto para o aplicativo que abriu este. Este comando é para o regresso de texto para actividades não Kodular, não para telas Kodular. Para Telas Kodular, como em vários aplicativos em tela, use Fechar tela com valor, não Fechar tela com texto simples. ';																								
																										
	Blockly.Msg.LANG_CONTROLS_BREAK_HELPURL = 'https://docs.kodular.io/Blocos/control#break ';																								
	Blockly.Msg.LANG_CONTROLS_BREAK_TITLE = 'quebrar';																								
	Blockly.Msg.LANG_CONTROLS_BREAK_INPUT_TEXT = 'valor';																								
	Blockly.Msg.LANG_CONTROLS_BREAK_COLLAPSED_TEXT = 'quebrar';																								
																									
// Logic Blocks.																									
	Blockly.Msg.LANG_CATEGORY_LOGIC = 'Lógica';																								
	Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL = 'http://en.wikipedia.org/wiki/Inequality_(mathematics) ';																								
	Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL_EQ = 'https://docs.kodular.io/Blocos/logic#= ';																								
	Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL_NEQ = 'https://docs.kodular.io/Blocos/logic#not= ';																								
	Blockly.Msg.LANG_LOGIC_COMPARE_TOOLTIP_EQ = 'Testa se duas coisas são iguais.\nAs coisas que estão sendo comparados podem ser quaisquer coisas, não apenas números.\nnúmeros são considerados iguais a sua forma impressa como cordas, $, por exemplo, o número 0 é igual ao texto \"0 \". Além disso, duas cordas\nque representam números são iguais se os números são iguais, por exemplo\n\"1 \" é igual a \"01 \". ';																								
	Blockly.Msg.LANG_LOGIC_COMPARE_TOOLTIP_NEQ = 'Retorna verdadeiro se ambas as entradas não são iguais entre si. ';																								
	Blockly.Msg.LANG_LOGIC_COMPARE_TRANSLATED_NAME = 'lógica igual ';																								
	Blockly.Msg.LANG_LOGIC_COMPARE_EQ = '=';																								
	Blockly.Msg.LANG_LOGIC_COMPARE_NEQ = '\U2260' ;																								
																										
	Blockly.Msg.LANG_LOGIC_OPERATION_HELPURL_AND = 'https://docs.kodular.io/Blocos/logic#and ';																								
	Blockly.Msg.LANG_LOGIC_OPERATION_HELPURL_OR = 'https://docs.kodular.io/Blocos/logic#or ';																								
	Blockly.Msg.LANG_LOGIC_OPERATION_AND = 'E (AND)';																								
	Blockly.Msg.LANG_LOGIC_OPERATION_OR = 'OU (OR)';																								
	Blockly.Msg.LANG_LOGIC_OPERATION_TOOLTIP_AND = 'Retorna verdadeiro se todas as entradas são verdadeiras. ';																								
	Blockly.Msg.LANG_LOGIC_OPERATION_TOOLTIP_OR = 'Retorna verdadeiro se qualquer entrada é verdade. ';																								
																										
	Blockly.Msg.LANG_LOGIC_NEGATE_HELPURL = 'https://docs.kodular.io/Blocos/logic#not ';																								
	Blockly.Msg.LANG_LOGIC_NEGATE_INPUT_NOT = 'não';																								
	Blockly.Msg.LANG_LOGIC_NEGATE_TOOLTIP = 'Retorna verdadeiro se a entrada é falsa.\nRetorna Retorna verdadeiro se a entrada é verdade. ';																								
																										
	Blockly.Msg.LANG_LOGIC_BOOLEAN_TRUE_HELPURL = 'https://docs.kodular.io/Blocos/logic#true ';																								
	Blockly.Msg.LANG_LOGIC_BOOLEAN_FALSE_HELPURL = 'https://docs.kodular.io/Blocos/logic#false ';																								
	Blockly.Msg.LANG_LOGIC_BOOLEAN_TRUE = 'verdade';																								
	Blockly.Msg.LANG_LOGIC_BOOLEAN_FALSE = 'falso';																								
	Blockly.Msg.LANG_LOGIC_BOOLEAN_TOOLTIP_TRUE = 'Retorna um booleano verdadeiro .';																								
	Blockly.Msg.LANG_LOGIC_BOOLEAN_TOOLTIP_FALSE = 'Retorna um booleano falso. ';																								
																									
// Math Blocks.																									
	Blockly.Msg.LANG_CATEGORY_MATH = 'Matemática';																								
	Blockly.Msg.LANG_MATH_NUMBER_HELPURL = 'https://docs.kodular.io/Blocos/math#number ';																								
	Blockly.Msg.LANG_MATH_NUMBER_TOOLTIP = 'Informar o número mostrado. ';																								
	Blockly.Msg.LANG_MATH_MUTATOR_ITEM_INPUT_NUMBER = 'número';																								
																										
	Blockly.Msg.LANG_MATH_DECIMAL_FORMAT = 'decimal';																								
	Blockly.Msg.LANG_MATH_BINARY_FORMAT = 'binário';																								
	Blockly.Msg.LANG_MATH_OCTAL_FORMAT = 'octal ';																								
	Blockly.Msg.LANG_MATH_HEXADECIMAL_FORMAT = 'hexadecimal ';																								
	Blockly.Msg.LANG_MATH_NUMBER_RADIX_HELPURL = 'https://docs.kodular.io/Blocos/math#number-radix ';																								
	Blockly.Msg.LANG_MATH_NUMBER_RADIX_TOOLTIP = 'Comunicar o número mostrado em (10 bases) formato decimal .';																								
	Blockly.Msg.LANG_MATH_NUMBER_RADIX_TITLE = 'número radix ';																								
																										
	Blockly.Msg.LANG_MATH_COMPARE_HELPURL = '';																								
	Blockly.Msg.LANG_MATH_COMPARE_HELPURL_EQ = 'https://docs.kodular.io/Blocos/math#= ';																								
	Blockly.Msg.LANG_MATH_COMPARE_HELPURL_NEQ = 'https://docs.kodular.io/Blocos/math#not= ';																								
	Blockly.Msg.LANG_MATH_COMPARE_HELPURL_LT = 'https://docs.kodular.io/Blocos/math#lt ';																								
	Blockly.Msg.LANG_MATH_COMPARE_HELPURL_LTE = 'https://docs.kodular.io/Blocos/math#lte ';																								
	Blockly.Msg.LANG_MATH_COMPARE_HELPURL_GT = 'https://docs.kodular.io/Blocos/math#gt ';																								
	Blockly.Msg.LANG_MATH_COMPARE_HELPURL_GTE = 'https://docs.kodular.io/Blocos/math#gte ';																								
	Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_EQ = 'Retorna verdadeiro se os dois números são iguais entre si. ';																								
	Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_NEQ = 'Retorna verdadeiro se ambos os números não são iguais entre si. ';																								
	Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_LT = 'Retorna verdadeiro se o primeiro número é menor\ndo que o segundo número. ';																								
	Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_LTE = 'Retorna verdadeiro se o primeiro número é menor\nou igual ao segundo número. ';																								
	Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_GT = 'Retorna verdadeiro se o primeiro número é maior\ndo que o segundo número. ';																								
	Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_GTE = 'Retorna verdadeiro se o primeiro número é maior\nou igual ao segundo número. ';																								
	Blockly.Msg.LANG_MATH_COMPARE_EQ = '=';																								
	Blockly.Msg.LANG_MATH_COMPARE_NEQ = '\U2260' ;																								
	Blockly.Msg.LANG_MATH_COMPARE_LT = '< ';																								
	Blockly.Msg.LANG_MATH_COMPARE_LTE = '\U2264' ;																								
	Blockly.Msg.LANG_MATH_COMPARE_GT = '> ';																								
	Blockly.Msg.LANG_MATH_COMPARE_GTE = '\U2265' ;																								
																										
	Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_ADD = 'https://docs.kodular.io/Blocos/math#add ';																								
	Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_MINUS = 'https://docs.kodular.io/Blocos/math#subtract ';																								
	Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_MULTIPLY = 'https://docs.kodular.io/Blocos/math#multiply ';																								
	Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_DIVIDE = 'https://docs.kodular.io/Blocos/math#divide ';																								
	Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_POWER = 'https://docs.kodular.io/Blocos/math#exponent ';																								
	Blockly.Msg.LANG_MATH_BITWISE_HELPURL_AND = 'https://docs.kodular.io/Blocos/math#bitwise-and ';																								
	Blockly.Msg.LANG_MATH_BITWISE_HELPURL_IOR = 'https://docs.kodular.io/Blocos/math#bitwise-ior ';																								
	Blockly.Msg.LANG_MATH_BITWISE_HELPURL_XOR = 'https://docs.kodular.io/Blocos/math#bitwise-xor ';																								
	Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_ADD = 'Retorna a soma dos dois números. ';																								
	Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_MINUS = 'Devolver a diferença dos dois números. ';																								
	Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_MULTIPLY = 'Devolver o produto dos dois números. ';																								
	Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_DIVIDE = 'Devolver o quociente dos dois números. ';																								
	Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_POWER = 'Devolver o primeiro número aumentou para\no poder do segundo número. ';																								
	Blockly.Msg.LANG_MATH_BITWISE_TOOLTIP_AND = 'Devolver o bit a bit E (AND) dos dois números. ';																								
	Blockly.Msg.LANG_MATH_BITWISE_TOOLTIP_IOR = 'Devolver o bit a bit OU (OR) inclusivo dos dois números. ';																								
	Blockly.Msg.LANG_MATH_BITWISE_TOOLTIP_XOR = 'Devolver o exclusivo OU (XOR) bit a bit dos dois números. ';																								
	Blockly.Msg.LANG_MATH_ARITHMETIC_ADD = '+';																								
	Blockly.Msg.LANG_MATH_ARITHMETIC_MINUS = '- ';																								
	Blockly.Msg.LANG_MATH_ARITHMETIC_MULTIPLY = '* ';																								
	Blockly.Msg.LANG_MATH_ARITHMETIC_DIVIDE = '/ ';																								
	Blockly.Msg.LANG_MATH_ARITHMETIC_POWER = '^ ';																								
																										
	Blockly.Msg.LANG_MATH_BITWISE_AND = 'bit a bit e ';																								
	Blockly.Msg.LANG_MATH_BITWISE_IOR = 'bit a bit ou ';																								
	Blockly.Msg.LANG_MATH_BITWISE_XOR = 'XOR bit a bit ';																								
																										
	/*Blockly.Msg.LANG_MATH_CHANGE_TITLE_CHANGE = 'mudança';																								
	Blockly.Msg.LANG_MATH_CHANGE_TITLE_ITEM = 'item';																								
	Blockly.Msg.LANG_MATH_CHANGE_INPUT_BY = 'de';																								
	Blockly.Msg.LANG_MATH_CHANGE_TOOLTIP = 'Adicionar um número a variável " %1". '; */																								
																										
																										
	Blockly.Msg.LANG_MATH_SINGLE_OP_ROOT = 'raiz quadrada';																								
	Blockly.Msg.LANG_MATH_SINGLE_OP_ABSOLUTE = 'absoluto';																								
	Blockly.Msg.LANG_MATH_SINGLE_OP_NEG = 'neg ';																								
	Blockly.Msg.LANG_MATH_SINGLE_OP_LN = 'registro';																								
	Blockly.Msg.LANG_MATH_SINGLE_OP_EXP = 'e ^ ';																								
	Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_ROOT = 'Retorna a raiz quadrada de um número.';																								
	Blockly.Msg.LANG_MATH_SINGLE_HELPURL_ROOT = 'https://docs.kodular.io/Blocos/math#sqrt';																								
	Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_ABS = 'Retorna o valor absoluto de um número.';																								
	Blockly.Msg.LANG_MATH_SINGLE_HELPURL_ABS = 'https://docs.kodular.io/Blocos/math#abs';																								
	Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_NEG = 'Voltar a negação de um número.';																								
	Blockly.Msg.LANG_MATH_SINGLE_HELPURL_NEG = 'https://docs.kodular.io/Blocos/math#neg ';																								
	Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_LN = 'Devolver o logaritmo natural de um número, ou seja, o logaritmo de base e (2,71828 ...)';																								
	Blockly.Msg.LANG_MATH_SINGLE_HELPURL_LN ='https://docs.kodular.io/blocks/math#log';																									
	Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_EXP = 'Retorno e (2,71828 ...) à potência de um número.';																								
	Blockly.Msg.LANG_MATH_SINGLE_HELPURL_EXP ='https://docs.kodular.io/blocks/math#e';																									
	/*Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_POW10 = 'Voltar 10 elevado à potência de um número. '; */																								
																										
	Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_ROUND = 'Arredondar um número para cima ou para baixo. ';																								
	Blockly.Msg.LANG_MATH_ROUND_HELPURL_ROUND = 'https://docs.kodular.io/Blocos/math#round ';																								
	Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_CEILING = 'Rondas a entrada para o\nnúmero menor não menos do que o input ';																								
	Blockly.Msg.LANG_MATH_ROUND_HELPURL_CEILING = 'https://docs.kodular.io/Blocos/math#ceiling ';																								
	Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_FLOOR = 'Rondas de entrada para a maior\nnúmero não maior do que a entrada ';																								
	Blockly.Msg.LANG_MATH_ROUND_HELPURL_FLOOR = 'https://docs.kodular.io/Blocos/math#floor ';																								
	Blockly.Msg.LANG_MATH_ROUND_OPERATOR_ROUND = 'volta';																								
	Blockly.Msg.LANG_MATH_ROUND_OPERATOR_CEILING = 'teto';																								
	Blockly.Msg.LANG_MATH_ROUND_OPERATOR_FLOOR = 'chão';																								
																										
	Blockly.Msg.LANG_MATH_TRIG_SIN = 'sin';																								
	Blockly.Msg.LANG_MATH_TRIG_COS = 'cos';																								
	Blockly.Msg.LANG_MATH_TRIG_TAN = 'tan';																								
	Blockly.Msg.LANG_MATH_TRIG_ASIN = 'asin';																								
	Blockly.Msg.LANG_MATH_TRIG_ACOS = 'acos';																								
	Blockly.Msg.LANG_MATH_TRIG_ATAN = 'atan';																								
	Blockly.Msg.LANG_MATH_TRIG_ATAN2 = 'atan2' ;																								
	Blockly.Msg.LANG_MATH_TRIG_ATAN2_X = 'x ';																								
	Blockly.Msg.LANG_MATH_TRIG_ATAN2_Y = 'y ';																								
	Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_SIN = 'Fornece o seno do ângulo especificado em graus. ';																								
	Blockly.Msg.LANG_MATH_TRIG_HELPURL_SIN = 'https://docs.kodular.io/Blocos/math#sin';																								
	Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_COS = 'Fornece o co-seno do ângulo especificado em graus. ';																								
	Blockly.Msg.LANG_MATH_TRIG_HELPURL_COS = 'https://docs.kodular.io/Blocos/math#cos';																								
	Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_TAN = 'Fornece a tangente do ângulo especificado em graus. ';																								
	Blockly.Msg.LANG_MATH_TRIG_HELPURL_TAN = 'https://docs.kodular.io/Blocos/math#tan ';																								
	Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ASIN = 'Proporciona o ângulo na gama (-90, + 90]\ngraus com o dado valor do seno .';																								
	Blockly.Msg.LANG_MATH_TRIG_HELPURL_ASIN = 'https://docs.kodular.io/Blocos/math#asin';																								
	Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ACOS = 'Fornece o ângulo no intervalo [0, 180)\ngraus com o dado valor do cosseno. ';																								
	Blockly.Msg.LANG_MATH_TRIG_HELPURL_ACOS = 'https://docs.kodular.io/Blocos/math#acos';																								
	Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ATAN = 'Fornece o ângulo no intervalo (-90, +90)\ngraus com o dado valor tangente. ';																								
	Blockly.Msg.LANG_MATH_TRIG_HELPURL_ATAN = 'https://docs.kodular.io/Blocos/math#atan ';																								
	Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ATAN2 = 'Fornece o ângulo no intervalo (-180, 180]\ngraus com as dadas coordenadas retangulares. ';																								
	Blockly.Msg.LANG_MATH_TRIG_HELPURL_ATAN2 = 'https://docs.kodular.io/Blocos/math#atan2' ;																								
																										
	Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_MIN = 'min';																								
	Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_MAX = 'max ';																								
	Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_MIN = 'Devolver o menor dos seus argumentos .. ';																								
	Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_MAX = 'Devolver o maior de seus argumentos .. ';																								
	Blockly.Msg.LANG_MATH_ONLIST_HELPURL_MIN = 'https://docs.kodular.io/Blocos/math/#min';																								
	Blockly.Msg.LANG_MATH_ONLIST_HELPURL_MAX = 'https://docs.kodular.io/Blocos/math/#max ';																								
																										
	Blockly.Msg.LANG_MATH_DIVIDE = '\U00F7' ;																								
	Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_MODULO = 'módulo de ';																								
	Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_REMAINDER = 'restante do ';																								
	Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_QUOTIENT = 'Quociente de ';																								
	Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_MODULO = 'Devolver o módulo. ';																								
	Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_MODULO = 'https://docs.kodular.io/Blocos/math#modulo ';																								
	Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_REMAINDER = 'Devolver o restante. ';																								
	Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_REMAINDER = 'https://docs.kodular.io/Blocos/math#remainder ';																								
	Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_QUOTIENT = 'Devolver o quociente. ';																								
	Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_QUOTIENT = 'https://docs.kodular.io/Blocos/math#quotient ';																								
																										
	Blockly.Msg.LANG_MATH_RANDOM_INT_HELPURL = 'https://docs.kodular.io/Blocos/math#randomint ';																								
	Blockly.Msg.LANG_MATH_RANDOM_INT_TITLE_RANDOM = 'inteiro aleatório ';																								
	Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT_FROM = 'de';																								
	Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT_TO = 'para';																								
	Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT = 'aleatório inteiro de %1 a %2';																								
	Blockly.Msg.LANG_MATH_RANDOM_INT_TOOLTIP = 'Retorna um inteiro aleatório entre os US\nlimite superior e o limite inferior. Os limites será cortada a ser menores do que\n2 **30. ';																								
																										
	Blockly.Msg.LANG_MATH_RANDOM_FLOAT_HELPURL = 'https://docs.kodular.io/Blocos/math#randomfrac ';																								
	Blockly.Msg.LANG_MATH_RANDOM_FLOAT_TITLE_RANDOM = 'fracção aleatória ';																								
	Blockly.Msg.LANG_MATH_RANDOM_FLOAT_TOOLTIP = 'Retornar um número aleatório entre 0 e 1. ';																								
																										
	Blockly.Msg.LANG_MATH_RANDOM_SEED_HELPURL = 'https://docs.kodular.io/Blocos/math#randomseed ';																								
	Blockly.Msg.LANG_MATH_RANDOM_SEED_TITLE_RANDOM = 'conjunto aleatório de sementes ';																								
	Blockly.Msg.LANG_MATH_RANDOM_SEED_INPUT_TO = 'para';																								
	Blockly.Msg.LANG_MATH_RANDOM_SEED_TOOLTIP = 'especifica uma semente\nnumérico para o gerador de números aleatórios ';																								
																										
	Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TITLE_CONVERT = 'converter';																								
	Blockly.Msg.LANG_MATH_CONVERT_ANGLES_OP_RAD_TO_DEG = 'radianos em graus';																								
	Blockly.Msg.LANG_MATH_CONVERT_ANGLES_OP_DEG_TO_RAD = 'graus para radianos';																								
	Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TOOLTIP_RAD_TO_DEG = 'Retorna o valor de grau na escala\n[0, 360) correspondente ao seu argumento radianos. ';																								
	Blockly.Msg.LANG_MATH_CONVERT_ANGLES_HELPURL_RAD_TO_DEG = 'https://docs.kodular.io/Blocos/math#convertrad ';																								
	Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TOOLTIP_DEG_TO_RAD = 'Retorna o valor em radianos na faixa de US\n[- \u03C0, + \u03C0) correspondente ao seu argumento graus. ';																								
	Blockly.Msg.LANG_MATH_CONVERT_ANGLES_HELPURL_DEG_TO_RAD = 'https://docs.kodular.io/Blocos/math#convertdeg ';																								
																										
	Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_HELPURL = 'https://docs.kodular.io/Blocos/math#format ';																								
	Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_TITLE = 'formatar como decimal ';																								
	Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT_NUM = 'número';																								
	Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT_PLACES = 'locais';																								
	Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT = 'formato como número decimal %1 lugares %2' ;																								
	Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_TOOLTIP = 'Retorna o número formatado como um decimal\ncom um número especificado de casas.';																								
																										
	Blockly.Msg.LANG_MATH_IS_A_NUMBER_HELPURL = 'https://docs.kodular.io/Blocos/math#isnumber ';																								
	Blockly.Msg.LANG_MATH_IS_A_NUMBER_INPUT_NUM = 'é o número? ';																								
	Blockly.Msg.LANG_MATH_IS_A_NUMBER_TOOLTIP = 'Testes se algo é um número. ';																								
																										
	Blockly.Msg.LANG_MATH_IS_A_DECIMAL_HELPURL = 'https://docs.kodular.io/Blocos/math#isnumber ';																								
	Blockly.Msg.LANG_MATH_IS_A_DECIMAL_INPUT_NUM = 'é base 10 '?;																								
	Blockly.Msg.LANG_MATH_IS_A_DECIMAL_TOOLTIP = 'Testes se algo é uma string que representa uma base positiva 10 inteiro. ';																								
																										
	Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_HELPURL = 'https://docs.kodular.io/Blocos/math#isnumber ';																								
	Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_INPUT_NUM = 'é hexadecimal? ';																								
	Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_TOOLTIP = 'Testes se algo é uma cadeia que representa um número hexadecimal. ';																								
																										
	Blockly.Msg.LANG_MATH_IS_A_BINARY_HELPURL = 'https://docs.kodular.io/Blocos/math#isnumber ';																								
	Blockly.Msg.LANG_MATH_IS_A_BINARY_INPUT_NUM = 'é binário? ';																								
	Blockly.Msg.LANG_MATH_IS_A_BINARY_TOOLTIP = 'Testes se algo é uma string que representa um número binário. ';																								
																										
																										
	Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TITLE_CONVERT = 'converter número';																								
	Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_DEC_TO_HEX = 'base 10 para hex ';																								
	Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_DEC_TO_HEX = 'https://docs.kodular.io/Blocos/math/#convertnumber ';																								
	Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_DEC_TO_HEX = 'Leva um número inteiro positivo na base 10 e devolve a cadeia que representa o número em hexadecimal ';																								
																										
	Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_HEX_TO_DEC = 'hex a base 10' ;																								
	Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_HEX_TO_DEC = 'https://docs.kodular.io/Blocos/math/#convertnumber ';																								
	Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_HEX_TO_DEC = 'Toma uma cadeia que representa um número em hexadecimal e devolve a cadeia que representa o número de base 10' ;																								
																										
	Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_DEC_TO_BIN = 'base 10 de binário ';																								
	Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_DEC_TO_BIN = 'https://docs.kodular.io/Blocos/math/#convertnumber ';																								
	Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_DEC_TO_BIN = 'Leva um número inteiro positivo na base 10 e devolve a cadeia que representa o número binário em ';																								
																										
	Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_BIN_TO_DEC = 'binário para a base 10' ;																								
	Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_BIN_TO_DEC = 'https://docs.kodular.io/Blocos/math/#convertnumber ';																								
	Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_BIN_TO_DEC = 'Pega uma string que representa um número em binário e retorna a string que representa o número em base 10' ;																								
																									
// Text Blocks.																									
	Blockly.Msg.LANG_CATEGORY_TEXT = 'Texto';																								
	Blockly.Msg.LANG_TEXT_TEXT_HELPURL = 'https://docs.kodular.io/Blocos/text#string ';																								
	Blockly.Msg.LANG_TEXT_TEXT_TOOLTIP = 'Uma cadeia de texto.';																								
	Blockly.Msg.LANG_TEXT_TEXT_LEFT_QUOTE = '\U201C ';																								
	Blockly.Msg.LANG_TEXT_TEXT_RIGHT_QUOTE = '\U201D ';																								
																										
	Blockly.Msg.LANG_TEXT_JOIN_HELPURL = 'https://docs.kodular.io/Blocos/text#join';																								
	Blockly.Msg.LANG_TEXT_JOIN_TITLE_CREATEWITH = 'criar texto com ';																								
	Blockly.Msg.LANG_TEXT_JOIN_TOOLTIP = 'Anexa todas as entradas para formar uma única cadeia de texto. Se não há entradas, faz um texto vazio. ';																								
	Blockly.Msg.LANG_TEXT_JOIN_TITLE_JOIN = 'Junte-se';																								
																										
	Blockly.Msg.LANG_TEXT_JOIN_ITEM_TITLE_ITEM = 'corda';																								
	Blockly.Msg.LANG_TEXT_JOIN_ITEM_TOOLTIP = '';																								
																										
	Blockly.Msg.LANG_TEXT_APPEND_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html ';																								
	Blockly.Msg.LANG_TEXT_APPEND_TO = 'para';																								
	Blockly.Msg.LANG_TEXT_APPEND_APPENDTEXT = 'acrescentar texto ';																								
	Blockly.Msg.LANG_TEXT_APPEND_VARIABLE = 'item';																								
	Blockly.Msg.LANG_TEXT_APPEND_TOOLTIP = 'Acrescente algum texto a variável " %1". ';																								
																										
	Blockly.Msg.LANG_TEXT_LENGTH_HELPURL = 'https://docs.kodular.io/Blocos/text#length ';																								
	Blockly.Msg.LANG_TEXT_LENGTH_INPUT_LENGTH = 'comprimento';																								
	Blockly.Msg.LANG_TEXT_LENGTH_TOOLTIP = 'Retorna o número de letras (incluindo espaços)\nno texto fornecida. ';																								
																										
	Blockly.Msg.LANG_TEXT_ISEMPTY_HELPURL = 'https://docs.kodular.io/Blocos/text#isempty ';																								
	Blockly.Msg.LANG_TEXT_ISEMPTY_INPUT_ISEMPTY = 'está vazia';																								
	Blockly.Msg.LANG_TEXT_ISEMPTY_TOOLTIP = 'Retorna verdadeiro se o comprimento do\ntexto '+ 'é 0, falso caso contrário.';																								
																										
	Blockly.Msg.LANG_TEXT_COMPARE_LT = '< ';																								
	Blockly.Msg.LANG_TEXT_COMPARE_EQUAL = '=';																								
	Blockly.Msg.LANG_TEXT_COMPARE_NEQ = '≠ ';																								
	Blockly.Msg.LANG_TEXT_COMPARE_GT = '> ';																								
	Blockly.Msg.LANG_TEXT_COMPARE_HELPURL = 'https://docs.kodular.io/Blocos/text#compare ';																								
	Blockly.Msg.LANG_TEXT_COMPARE_INPUT_COMPARE = 'textos comparar';																								
	Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_LT = 'Testa se text1 é lexicographically menos de text2. Se um texto é o prefixo do outro, o texto mais curto é de R\nconsiderada menor. caracteres maiúsculos precedem os minúsculos. ';																								
	Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_EQUAL = 'Testa se cadeias de texto são idênticos, ie., Têm os mesmos\npersonagens na mesma ordem. Isso é diferente do normal =\nno caso em que as cadeias de texto são números:. 123 e 0123 são = $, mas não = texto ';																								
	Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_NEQ = 'Testa se cadeias de texto são diferentes, ie., Don \'t têm os mesmos\npersonagens na mesma ordem. Isso é diferente do ordinário ≠\nno caso em que as cadeias de texto são números: 123 e 0123 são texto ≠\nmas são matematicamente = ';																								
	Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_GT = 'Relatórios se text1 é lexicographically maior do que text2. Se um texto é o prefixo do outro, o texto mais curto é considerado menor. caracteres\nmaiúsculos precedem os minúsculos. ';																								
	Blockly.Msg.LANG_TEXT_TEXT_OBFUSCATE_TOOLTIP = 'Produz texto, como um bloco de texto. A diferença é que os\ntexto não é facilmente detectável pelo exame APK do aplicativo. Utilize este ao criar aplicativos\ndistribuir que incluem informações confidenciais, por exemplo, chaves de API.\nAviso: Este fornece apenas muito baixa segurança contra adversários experientes. ';																								
	Blockly.Msg.LANG_TEXT_TEXT_OBFUSCATE = 'Texto Obfuscated ';																								
	Blockly.Msg.LANG_TEXT_TEXT_OBFUSCATE_HELPURL = 'https://docs.kodular.io/Blocos/text#obfuscatetext ';																								
																										
	/*Blockly.Msg.LANG_TEXT_ENDSTRING_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm ';																								
	Blockly.Msg.LANG_TEXT_ENDSTRING_INPUT = 'letras em texto ';																								
	Blockly.Msg.LANG_TEXT_ENDSTRING_TOOLTIP = 'Retorna especificado número de letras no início ou no final do texto. ';																								
	Blockly.Msg.LANG_TEXT_ENDSTRING_OPERATOR_FIRST = 'primeiro';																								
	Blockly.Msg.LANG_TEXT_ENDSTRING_OPERATOR_LAST = 'último';*/																								
																										
	/*Blockly.Msg.LANG_TEXT_INDEXOF_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm ';																								
	Blockly.Msg.LANG_TEXT_INDEXOF_TITLE_FIND = 'encontrar';																								
	Blockly.Msg.LANG_TEXT_INDEXOF_INPUT_OCCURRENCE = 'ocorrência de texto ';																								
	Blockly.Msg.LANG_TEXT_INDEXOF_INPUT_INTEXT = 'em texto';																								
	Blockly.Msg.LANG_TEXT_INDEXOF_TOOLTIP = 'Retorna o índice do primeiro / última ocorrência\n'+																								
	of first text in the second text.\n' +																									
	Returns 0 if text is not found.';																									
	Blockly.Msg.LANG_TEXT_INDEXOF_OPERATOR_FIRST = 'primeiro';																								
	Blockly.Msg.LANG_TEXT_INDEXOF_OPERATOR_LAST = 'último';*/																								
																										
	/*Blockly.Msg.LANG_TEXT_CHARAT_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm ';																								
	Blockly.Msg.LANG_TEXT_CHARAT_INPUT_AT = 'letra de ';																								
	Blockly.Msg.LANG_TEXT_CHARAT_INPUT_INTEXT = 'em texto';																								
	Blockly.Msg.LANG_TEXT_CHARAT_TOOLTIP = 'Retorna a carta na posição especificada. '; */																								
																										
	Blockly.Msg.LANG_TEXT_CHANGECASE_OPERATOR_UPPERCASE = 'upcase ';																								
	Blockly.Msg.LANG_TEXT_CHANGECASE_OPERATOR_DOWNCASE = 'downcase ';																								
	Blockly.Msg.LANG_TEXT_CHANGECASE_TOOLTIP_UPPERCASE = 'Retorna uma cópia do seu argumento seqüência de texto convertido para maiúsculas. ';																								
	Blockly.Msg.LANG_TEXT_CHANGECASE_HELPURL_UPPERCASE = 'https://docs.kodular.io/Blocos/text#upcase ';																								
	Blockly.Msg.LANG_TEXT_CHANGECASE_TOOLTIP_DOWNCASE = 'Retorna uma cópia do seu argumento seqüência de texto convertido para minúsculas. ';																								
	Blockly.Msg.LANG_TEXT_CHANGECASE_HELPURL_DOWNCASE = 'https://docs.kodular.io/Blocos/text#downcase ';																								
																										
	Blockly.Msg.LANG_TEXT_TRIM_HELPURL = 'https://docs.kodular.io/Blocos/text#trim ';																								
	Blockly.Msg.LANG_TEXT_TRIM_TITLE_TRIM = 'aparar';																								
	Blockly.Msg.LANG_TEXT_TRIM_TOOLTIP = 'Retorna uma cópia de seus argumentos de cadeia de texto com qualquer\nespaços antes ou depois removido. ';																								
																										
	Blockly.Msg.LANG_TEXT_STARTS_AT_HELPURL = 'https://docs.kodular.io/Blocos/text#startsat ';																								
	Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_STARTS_AT = 'começa em';																								
	Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_TEXT = 'texto';																								
	Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_PIECE = 'peça';																								
	Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT = 'começa no texto %1 peça %2' ;																								
	Blockly.Msg.LANG_TEXT_STARTS_AT_TOOLTIP = 'Retorna o índice inicial na peça no texto.\nOnde o índice 1 denota o início do texto. Retorna 0 se o\npeça não está no texto. ';																								
																										
	Blockly.Msg.LANG_TEXT_CONTAINS_HELPURL = 'https://docs.kodular.io/Blocos/text#contains';																								
	Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_CONTAINS = 'contém';																								
	Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_TEXT = 'texto';																								
	Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_PIECE = 'peça';																								
	Blockly.Msg.LANG_TEXT_CONTAINS_INPUT = 'contém texto %1 peça %2' ;																								
	Blockly.Msg.LANG_TEXT_CONTAINS_TOOLTIP = 'Testa se a peça está contida no texto. ';																								
																										
	Blockly.Msg.LANG_TEXT_SPLIT_HELPURL = '';																								
	Blockly.Msg.LANG_TEXT_SPLIT_INPUT_TEXT = 'texto';																								
	Blockly.Msg.LANG_TEXT_SPLIT_INPUT_AT = 'em ';																								
	Blockly.Msg.LANG_TEXT_SPLIT_INPUT_AT_LIST = 'em (lista)';																								
	Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_FIRST = 'dividir em primeiro lugar ';																								
	Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_FIRST_OF_ANY = 'dividir a primeira de qualquer ';																								
	Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT = 'Dividido';																								
	Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_ANY = 'dividir a qualquer ';																								
	Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_FIRST = 'Divide o texto dado em duas partes usando o local da primeira ocorrência de\no texto \'em \' como o ponto de divisão, e retorna uma lista de dois itens que consiste na peça\nantes do ponto de divisão e a peça após a divisória ponto.\nSplitting "maçã, banana, cereja, ração" com uma vírgula como o ponto de divisão\nretorna uma lista de dois itens: a primeira é a "maçã" texto eo segundo é o texto\n"banana, cereja, ração".\nNote que a vírgula depois de "maçã" não aparece no resultado, $, porque isso é o ponto de divisão. ';																								
	Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_FIRST = 'https://docs.kodular.io/Blocos/text#splitat ';																								
	Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_FIRST_OF_ANY = 'Divide o texto dado em uma lista de duas item, usando o primeiro local de qualquer item\nna lista \'em\' como o ponto de divisão.\n$ Splitting "Eu amo maçãs bananas maçãs uvas" pela lista \"(ba, ap)\" retorna\na lista de dois itens, sendo o primeiro \"Eu amo\" e sendo a segunda\n\"PLES bananas maçãs uvas\".';																								
	Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_FIRST_OF_ANY = 'https://docs.kodular.io/Blocos/text#splitatfirstofany ';																								
	Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT = 'Divide o texto em pedaços usando o texto \'em \', como os pontos de divisão e produz uma lista dos resultados.\nSplitting "um, dois, três, quatro" \"em\" (vírgula) retorna a lista \"(um dois três quatro)\".\nSplitting "uma batata, duas batata, três de batata, quatro batatas" em "batata", retorna a lista "(um dois três quatro)". ';																								
	Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT = 'https://docs.kodular.io/Blocos/text#split ';																								
	Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_ANY = 'Divide o texto dado em uma lista, usando qualquer um dos itens na lista \'em\' como o ponto\ndividindo, e retorna uma lista dos resultados.\nSplitting "Appleberry, banana, cereja, ração" com \'em \' como a lista de dois elementos cuja\nprimeiro item é uma vírgula e cujo item segundo é "RRY" retorna uma lista de quatro itens:\n"(applebe de banana che ração)".';																								
	Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_ANY = 'https://docs.kodular.io/Blocos/text#splitatany ';																								
																										
	/*.LANG_TEXT_PRINT_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html ';																								
	Blockly.Msg.LANG_TEXT_PRINT_TITLE_PRINT = 'impressão';																								
	Blockly.Msg.LANG_TEXT_PRINT_TOOLTIP = 'Imprimir o texto, número especificado ou outro valor. '; */																								
																										
	/*Blockly.Msg.LANG_TEXT_PROMPT_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode92.html ';																								
	Blockly.Msg.LANG_TEXT_PROMPT_TITLE_PROMPT_FOR = 'pedir ';																								
	Blockly.Msg.LANG_TEXT_PROMPT_TITILE_WITH_MESSAGE = 'com a mensagem ';																								
	Blockly.Msg.LANG_TEXT_PROMPT_TOOLTIP = 'Prompt para entrada do usuário com o texto especificado. ';																								
	Blockly.Msg.LANG_TEXT_PROMPT_TYPE_TEXT = 'texto';																								
	Blockly.Msg.LANG_TEXT_PROMPT_TYPE_NUMBER = 'número';*/																								
																										
	Blockly.Msg.LANG_TEXT_SPLIT_AT_SPACES_HELPURL = 'https://docs.kodular.io/Blocos/text#splitspaces';																								
	Blockly.Msg.LANG_TEXT_SPLIT_AT_SPACES_TITLE = 'dividido em espaços';																								
	Blockly.Msg.LANG_TEXT_SPLIT_AT_TOOLTIP = 'Dividir o texto em partes separadas por espaços. ';																								
																										
	Blockly.Msg.LANG_TEXT_SEGMENT_HELPURL = 'https://docs.kodular.io/Blocos/text#segment ';																								
	Blockly.Msg.LANG_TEXT_SEGMENT_TITLE_SEGMENT = 'segmento';																								
	Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_START = 'começar';																								
	Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_LENGTH = 'comprimento';																								
	Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_TEXT = 'texto';																								
	Blockly.Msg.LANG_TEXT_SEGMENT_INPUT = 'segmento de texto %1 %2 início comprimento %3' ;																								
	Blockly.Msg.LANG_TEXT_SEGMENT_AT_TOOLTIP = 'Extrai o segmento de um dado comprimento do texto dado\na partir do texto fornecido a partir da posição determinada. Posição\n1 denota o início do texto. ';																								
																										
	Blockly.Msg.LANG_TEXT_REPLACE_ALL_HELPURL = 'https://docs.kodular.io/Blocos/text#replaceall ';																								
	Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_SEGMENT = 'segmento';																								
	Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_TEXT = 'texto';																								
	Blockly.Msg.LANG_TEXT_REPLACE_ALL_TITLE_REPLACE_ALL = 'substitua tudo';																								
	Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_REPLACEMENT = 'substituição';																								
	Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT = 'substituem todo o texto %1 %2 segmento de substituição %3' ;																								
	Blockly.Msg.LANG_TEXT_REPLACE_ALL_TOOLTIP = 'Retorna um novo texto obtida pela substituição de todas as ocorrências\ndo segmento com a substituição. ';																								
																										
	Blockly.Msg.LANG_TEXT_TEXT_IS_STRING_HELPURL = 'https://docs.kodular.io/Blocos/text#isstring ';																								
	Blockly.Msg.LANG_TEXT_TEXT_IS_STRING_TITLE = 'é string ';																								
	Blockly.Msg.LANG_TEXT_TEXT_IS_STRING_TOOLTIP = 'Retorna verdadeiro se a entrada é uma seqüência. ';																								
																										
	Blockly.Msg.LANG_TEXT_REPLACE_ALL_MAPPINGS_HELPURL = '';																								
	Blockly.Msg.LANG_TEXT_REPLACE_ALL_MAPPINGS_INPUT_TEXT = 'em texto';																								
	Blockly.Msg.LANG_TEXT_REPLACE_ALL_MAPPINGS_INPUT_ORDER_PREFIX = 'preferindo ';																								
	Blockly.Msg.LANG_TEXT_REPLACE_ALL_MAPPINGS_INPUT_ORDER = 'ordem';																								
	Blockly.Msg.LANG_TEXT_REPLACE_ALL_MAPPINGS_OPERATOR_LONGEST_STRING_FIRST = 'mais longa seqüência primeiro ';																								
	Blockly.Msg.LANG_TEXT_REPLACE_ALL_MAPPINGS_OPERATOR_DICTIONARY_ORDER = 'dicionário';																								
	Blockly.Msg.LANG_TEXT_REPLACE_ALL_MAPPINGS_TITLE = 'substituir todos os mapeamentos';																								
	Blockly.Msg.LANG_TEXT_REPLACE_ALL_MAPPINGS_HELPURL_LONGEST_STRING_FIRST = 'https://docs.kodular.io/Blocos/text#replaceallmappingslongeststring ';																								
	Blockly.Msg.LANG_TEXT_REPLACE_ALL_MAPPINGS_TOOLTIP_LONGEST_STRING_FIRST = 'Retorna um novo texto obtida pela substituição de todas as ocorrências\ndefinidos pelas chaves de dicionário de entrada com os valores das teclas correspondentes.\nEm caso de uma escolha entre a substituição de uma chave ou de outra, a chave mais longa é substituído primeiro. ';																								
	Blockly.Msg.LANG_TEXT_REPLACE_ALL_MAPPINGS_HELPURL_DICTIONARY_ORDER = 'https://docs.kodular.io/Blocos/text#replaceallmappingsdictionary ';																								
	Blockly.Msg.LANG_TEXT_REPLACE_ALL_MAPPINGS_TOOLTIP_DICTIONARY_ORDER = 'Retorna um novo texto obtida pela substituição de todas as ocorrências\ndefinidos pelas chaves de dicionário de entrada com os valores das teclas correspondentes.\nEm caso de uma escolha entre a substituição de uma chave ou de outro, o elemento que ocorrer primeiro\nno dicionário é substituído primeiro. ';																								
																										
	Blockly.Msg.LANG_TEXT_REVERSE_HELPURL = 'https://docs.kodular.io/Blocos/text#reverse ';																								
	Blockly.Msg.LANG_TEXT_REVERSE_INPUT = 'reverter';																								
	Blockly.Msg.LANG_TEXT_REVERSE_TOOLTIP = 'Inverter o texto dado. ';																								
																										
// Lists Blocks.																									
	Blockly.Msg.LANG_CATEGORY_LISTS = 'Listas';																								
	//Blockly.Msg.LANG_LISTS_CREATE_EMPTY_HELPURL = 'http://en.wikipedia.org/wiki/Linked_list#Empty_lists';																								
	Blockly.Msg.LANG_LISTS_CREATE_EMPTY_TITLE = 'criar lista vazia ';																								
	//Blockly.Msg.LANG_LISTS_CREATE_EMPTY_TOOLTIP = 'Retorna uma lista, de comprimento 0, não contendo registros de dados;																								
																										
	Blockly.Msg.LANG_LISTS_CREATE_WITH_EMPTY_HELPURL = 'https://docs.kodular.io/Blocos/lists#makealist ';																								
	Blockly.Msg.LANG_LISTS_CREATE_WITH_TITLE_MAKE_LIST = 'faça uma lista';																								
	Blockly.Msg.LANG_LISTS_CREATE_WITH_TOOLTIP = 'Criar uma lista com qualquer número de itens. ';																								
																										
	Blockly.Msg.LANG_LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = 'Lista';																								
	Blockly.Msg.LANG_LISTS_CREATE_WITH_CONTAINER_TOOLTIP = 'Adicionar, remover ou seções de reordenamento para reconfigurar este bloco lista. ';																								
																										
	Blockly.Msg.LANG_LISTS_CREATE_WITH_ITEM_TITLE = 'item';																								
	Blockly.Msg.LANG_LISTS_CREATE_WITH_ITEM_TOOLTIP = 'Adicionar um item à lista. ';																								
																										
	Blockly.Msg.LANG_LISTS_ADD_ITEM_TITLE = 'item';																								
	Blockly.Msg.LANG_LISTS_ADD_ITEM_TOOLTIP = 'Adicionar um item à lista. ';																								
	Blockly.Msg.LANG_LISTS_ADD_ITEM_HELPURL = 'https://docs.kodular.io/Blocos/lists#additems';																								
																										
	Blockly.Msg.LANG_LISTS_SELECT_ITEM_TITLE_HELPURL = 'https://docs.kodular.io/Blocos/lists#selectlistitem ';																								
	Blockly.Msg.LANG_LISTS_SELECT_ITEM_TITLE_SELECT = 'selecionar item da lista ';																								
	Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT_LIST = 'Lista';																								
	Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT_INDEX = 'índice';																								
	Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT = 'seleccionar o item lista lista %1 o índice %2' ;																								
	Blockly.Msg.LANG_LISTS_SELECT_ITEM_TOOLTIP = 'Retorna o item no índice de posição na lista. ';																								
																										
	Blockly.Msg.LANG_LISTS_IS_IN_HELPURL = 'https://docs.kodular.io/Blocos/lists#inlist ';																								
	Blockly.Msg.LANG_LISTS_IS_IN_TITLE_IS_IN = 'está na lista? ';																								
	Blockly.Msg.LANG_LISTS_IS_IN_INPUT_THING = 'coisa';																								
	Blockly.Msg.LANG_LISTS_IS_IN_INPUT_LIST = 'Lista';																								
	Blockly.Msg.LANG_LISTS_IS_IN_INPUT = 'está na lista? coisa %1 lista %2' ;																								
	Blockly.Msg.LANG_LISTS_IS_IN_TOOLTIP = 'Retorna verdadeiro se a coisa é um item na lista, e falso se não.';																								
																										
	Blockly.Msg.LANG_LISTS_POSITION_IN_HELPURL = 'https://docs.kodular.io/Blocos/lists#indexinlist ';																								
	Blockly.Msg.LANG_LISTS_POSITION_IN_TITLE_POSITION = 'índice na lista ';																								
	Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT_THING = 'coisa';																								
	Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT_LIST = 'Lista';																								
	Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT = 'índice na lista de coisa %1 lista %2' ;																								
	Blockly.Msg.LANG_LISTS_POSITION_IN_TOOLTIP = 'Encontre a posição da coisa na lista. Se ele \'s não na lista, retornar 0.';																								
																										
	Blockly.Msg.LANG_LISTS_PICK_RANDOM_ITEM_HELPURL = 'https://docs.kodular.io/Blocos/lists#pickrandomitem ';																								
	Blockly.Msg.LANG_LISTS_PICK_RANDOM_TITLE_PICK_RANDOM = 'escolher um item aleatório ';																								
	Blockly.Msg.LANG_LISTS_PICK_RANDOM_ITEM_INPUT_LIST = 'Lista';																								
	Blockly.Msg.LANG_LISTS_PICK_RANDOM_TOOLTIP = 'Escolha um item de forma aleatória a partir da lista. ';																								
																										
	Blockly.Msg.LANG_LISTS_REPLACE_ITEM_HELPURL = 'https://docs.kodular.io/Blocos/lists#replace ';																								
	Blockly.Msg.LANG_LISTS_REPLACE_ITEM_TITLE_REPLACE = 'substituir item da lista ';																								
	Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_LIST = 'Lista';																								
	Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_INDEX = 'índice';																								
	Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_REPLACEMENT = 'substituição';																								
	Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT = 'substituir item da lista lista %1 índice %2 substituição %3' ;																								
	Blockly.Msg.LANG_LISTS_REPLACE_ITEM_TOOLTIP = 'Substitui o item enésimo em uma lista. ';																								
																										
	Blockly.Msg.LANG_LISTS_REMOVE_ITEM_HELPURL = 'https://docs.kodular.io/Blocos/lists#removeitem ';																								
	Blockly.Msg.LANG_LISTS_REMOVE_ITEM_TITLE_REMOVE = 'remover item da lista ';																								
	Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT_LIST = 'Lista';																								
	Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT_INDEX = 'índice';																								
	Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT = 'item da lista remover lista %1 o índice %2' ;																								
	Blockly.Msg.LANG_LISTS_REMOVE_ITEM_TOOLTIP = 'Remove o item na posição especificada da lista. ';																								
																										
	/*Blockly.Msg.LANG_LISTS_REPEAT_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm ';																								
	Blockly.Msg.LANG_LISTS_REPEAT_TITLE_CREATE = 'lista com o item 'criar;																								
	Blockly.Msg.LANG_LISTS_REPEAT_INPUT_REPEATED = 'Repetiu ';																								
	Blockly.Msg.LANG_LISTS_REPEAT_INPUT_TIMES = 'tempos;																								
	Blockly.Msg.LANG_LISTS_REPEAT_TOOLTIP = 'Cria uma lista que consiste no valor dado\n'+																								
	repeated the specified number of times.';*/																									
																										
	Blockly.Msg.LANG_LISTS_LENGTH_HELPURL = 'https://docs.kodular.io/Blocos/lists#lengthoflist ';																								
	Blockly.Msg.LANG_LISTS_LENGTH_INPUT_LENGTH = 'comprimento da lista ';																								
	Blockly.Msg.LANG_LISTS_LENGTH_INPUT_LIST = 'Lista';																								
	Blockly.Msg.LANG_LISTS_LENGTH_INPUT = 'comprimento da lista lista %1' ;																								
	Blockly.Msg.LANG_LISTS_LENGTH_TOOLTIP = 'Conta o número de itens em uma lista. ';																								
																										
	Blockly.Msg.LANG_LISTS_APPEND_LIST_HELPURL = 'https://docs.kodular.io/Blocos/lists#append ';																								
	Blockly.Msg.LANG_LISTS_APPEND_LIST_TITLE_APPEND = 'acrescentar à lista ';																								
	Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT_LIST1 = 'list1' ;																								
	Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT_LIST2 = 'list2' ;																								
	Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT = 'acrescentar a lista lista1 %1 lista2 %2' ;																								
	Blockly.Msg.LANG_LISTS_APPEND_LIST_TOOLTIP = 'Anexa todos os itens em list2 para o final de list1. Após o acréscimo, lista1 irá incluir esses elementos adicionais, mas lista2 será inalterado.';																								
																										
	Blockly.Msg.LANG_LISTS_ADD_ITEMS_HELPURL = 'https://docs.kodular.io/Blocos/lists#additems';																								
	Blockly.Msg.LANG_LISTS_ADD_ITEMS_TITLE_ADD = 'adicionar itens à lista ';																								
	Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT_LIST = 'Lista';																								
	Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT_ITEM = 'item';																								
	Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT = 'adicionar itens à lista lista %1 item %2' ;																								
	Blockly.Msg.LANG_LISTS_ADD_ITEMS_TOOLTIP = 'Adiciona itens ao final de uma lista. ';																								
																										
	Blockly.Msg.LANG_LISTS_ADD_ITEMS_CONTAINER_TITLE_ADD = 'Lista';																								
	Blockly.Msg.LANG_LISTS_ADD_ITEMS_CONTAINER_TOOLTIP = 'Adicionar, remover ou seções de reordenamento para reconfigurar este bloco lista. ';																								
																										
	Blockly.Msg.LANG_LISTS_COPY_HELPURL = 'https://docs.kodular.io/Blocos/lists#copy ';																								
	Blockly.Msg.LANG_LISTS_COPY_TITLE_COPY = 'lista copiar ';																								
	Blockly.Msg.LANG_LISTS_COPY_INPUT_LIST = 'Lista';																								
	Blockly.Msg.LANG_LISTS_COPY_TOOLTIP = 'Faz uma cópia de uma lista, incluindo a cópia de todos os sub listas';																								
																										
	Blockly.Msg.LANG_LISTS_IS_LIST_HELPURL = 'https://docs.kodular.io/Blocos/lists#isalist ';																								
	Blockly.Msg.LANG_LISTS_IS_LIST_TITLE_IS_LIST = 'é uma lista? ';																								
	Blockly.Msg.LANG_LISTS_IS_LIST_INPUT_THING = 'coisa';																								
	Blockly.Msg.LANG_LISTS_IS_LIST_TOOLTIP = 'Testes se algo é uma lista. ';																								
																										
	Blockly.Msg.LANG_LISTS_REVERSE_HELPURL = 'https://docs.kodular.io/Blocos/lists#reverse ';																								
	Blockly.Msg.LANG_LISTS_REVERSE_TITLE_REVERSE = 'lista inversa ';																								
	Blockly.Msg.LANG_LISTS_REVERSE_INPUT_LIST = 'Lista';																								
	Blockly.Msg.LANG_LISTS_REVERSE_TOOLTIP = 'Inverte a ordem da lista de entrada e retorna como uma nova lista. ';																								
																										
	Blockly.Msg.LANG_LISTS_TO_CSV_ROW_HELPURL = 'https://docs.kodular.io/Blocos/lists#listtocsvrow ';																								
	Blockly.Msg.LANG_LISTS_TO_CSV_ROW_TITLE_TO_CSV = 'lista para linha CSV ';																								
	Blockly.Msg.LANG_LISTS_TO_CSV_ROW_INPUT_LIST = 'Lista';																								
	Blockly.Msg.LANG_LISTS_TO_CSV_ROW_TOOLTIP = 'Interpreta a lista como uma linha de uma tabela e retorna um CSV \(valores separados por vírgula \) texto que representa a linha. Cada item na lista de linha é considerado um campo, e é citada com aspas no texto CSV resultante. Os produtos são separados por vírgulas. O texto linha retornada não tem um separador de linha no final. ';																								
																										
	Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_HELPURL = 'https://docs.kodular.io/Blocos/lists#listfromcsvrow ';																								
	Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_TITLE_FROM_CSV = 'lista de linha CSV ';																								
	Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_INPUT_TEXT = 'texto';																								
	Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_TOOLTIP = 'Analisa um texto como um CSV \(valores separados por vírgula \) linha formatada para produzir uma lista dos campos. É um erro para o texto linha para conter novas linhas unescaped dentro campos \(de forma eficaz, várias linhas \). Não há problema para o texto da linha de fim em uma única nova linha ou CRLF. ';																								
																										
	Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_HELPURL = 'https://docs.kodular.io/Blocos/lists#listtocsvtable ';																								
	Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_TITLE_TO_CSV = 'lista para a mesa CSV ';																								
	Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_INPUT_LIST = 'Lista';																								
	Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_TOOLTIP = 'Interpreta a lista como uma tabela em formato de linha principal e retorna um CSV \(valores separados por vírgula \) texto que representa a mesa. Cada item na lista em si deve ser uma lista que representa uma linha da tabela de CSV. Cada item na lista de linha é considerado um campo, e é citada com aspas no texto CSV resultante. No texto retornado, itens em linhas são separadas por vírgulas e linhas são separadas por CRLF \(\\r \$ \). ';																								
																										
	Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_HELPURL = 'https://docs.kodular.io/Blocos/lists#listfromcsvtable ';																								
	Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_TITLE_FROM_CSV = 'lista da tabela CSV ';																								
	Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_INPUT_TEXT = 'texto';																								
	Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_TOOLTIP = 'Analisa um texto como um CSV \(valores separados por vírgula \) tabela formatada para produzir uma lista de linhas, cada uma das quais é uma lista de campos. As linhas podem ser separadas por novas linhas \(\$ \) ou CRLF \(\\r \$ \).';																								
																										
	Blockly.Msg.LANG_LISTS_INSERT_ITEM_HELPURL = 'https://docs.kodular.io/Blocos/lists#insert ';																								
	Blockly.Msg.LANG_LISTS_INSERT_TITLE_INSERT_LIST = 'inserir item da lista ';																								
	Blockly.Msg.LANG_LISTS_INSERT_INPUT_LIST = 'Lista';																								
	Blockly.Msg.LANG_LISTS_INSERT_INPUT_INDEX = 'índice';																								
	Blockly.Msg.LANG_LISTS_INSERT_INPUT_ITEM = 'item';																								
	Blockly.Msg.LANG_LISTS_INSERT_INPUT = 'lista inserção item da lista %1 o índice %2 item %3' ;																								
	Blockly.Msg.LANG_LISTS_INSERT_TOOLTIP = 'Inserir um item em uma lista na posição especificada. ';																								
																										
	Blockly.Msg.LANG_LISTS_IS_EMPTY_HELPURL = 'https://docs.kodular.io/Blocos/lists#islistempty ';																								
	Blockly.Msg.LANG_LISTS_TITLE_IS_EMPTY = 'é lista vazia? ';																								
	Blockly.Msg.LANG_LISTS_INPUT_LIST = 'Lista';																								
	Blockly.Msg.LANG_LISTS_IS_EMPTY_TOOLTIP = 'Retorna verdadeiro se a lista está vazia. ';																								
																										
	Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_HELPURL = 'https://docs.kodular.io/Blocos/lists#lookuppairs';																								
	Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_TITLE_LOOKUP_IN_PAIRS = 'olhar para cima em pares';																								
	Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_KEY = 'chave';																								
	Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_PAIRS = 'pares';																								
	Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_NOT_FOUND = 'não encontrado';																								
	Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT = 'olhar para cima em pares chave %1 pares %2 notFound %3' ;																								
	Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_TOOLTIP = 'Retorna o valor associado com a chave na lista de pares';																								
																										
// Join With Separator block																									
	Blockly.Msg.LANG_LISTS_JOIN_WITH_SEPARATOR_HELPURL = 'https://docs.kodular.io/Blocos/lists#joinwithseparator ';																								
	Blockly.Msg.LANG_LISTS_JOIN_WITH_SEPARATOR_TITLE = 'juntar-se com separador ';																								
	Blockly.Msg.LANG_LISTS_JOIN_WITH_SEPARATOR_SEPARATOR = 'separador';																								
	Blockly.Msg.LANG_LISTS_JOIN_WITH_SEPARATOR_LIST = 'Lista';																								
	Blockly.Msg.LANG_LISTS_JOIN_WITH_SEPARATOR_INPUT = 'participar itens usando separador %1 lista %2' ;																								
	Blockly.Msg.LANG_LISTS_JOIN_WITH_SEPARATOR_TOOLTIP = 'Retorna texto com elementos da lista unidas com separador ';																								
																										
	/*Blockly.Msg.LANG_LISTS_INDEX_OF_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm ';																								
	Blockly.Msg.LANG_LISTS_INDEX_OF_TITLE_FIND = 'encontrar';																								
	Blockly.Msg.LANG_LISTS_INDEX_OF_INPUT_OCCURRENCE = 'ocorrência de produto ';																								
	Blockly.Msg.LANG_LISTS_INDEX_OF_INPUT_IN_LIST = 'na lista';																								
	Blockly.Msg.LANG_LISTS_INDEX_OF_TOOLTIP = 'Retorna o índice do primeiro / última ocorrência\n'+																								
	of the item in the list.\n' +																									
	Returns 0 if text is not found.';																									
	Blockly.Msg.LANG_LISTS_INDEX_OF_FIRST = 'primeiro';																								
	Blockly.Msg.LANG_LISTS_INDEX_OF_LAST = 'último';																								
																										
	Blockly.Msg.LANG_LISTS_GET_INDEX_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm ';																								
	Blockly.Msg.LANG_LISTS_GET_INDEX_TITLE_GET = 'obter item em ';																								
	Blockly.Msg.LANG_LISTS_GET_INDEX_INPUT_IN_LIST = 'na lista';																								
	Blockly.Msg.LANG_LISTS_GET_INDEX_TOOLTIP = 'Retorna o valor na posição especificada em uma lista. ';																								
																										
	Blockly.Msg.LANG_LISTS_SET_INDEX_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm ';																								
	Blockly.Msg.LANG_LISTS_SET_INDEX_INPUT_SET = 'artigo conjunto no ';																								
	Blockly.Msg.LANG_LISTS_SET_INDEX_INPUT_IN_LIST = 'na lista';																								
	Blockly.Msg.LANG_LISTS_SET_INDEX_INPUT_TO = 'para';																								
	Blockly.Msg.LANG_LISTS_SET_INDEX_TOOLTIP = 'Define o valor na posição especificada em uma lista. '; */																								
																									
// Dictionaries Blocks																									
	Blockly.Msg.LANG_CATEGORY_DICTIONARIES = 'Dicionários';																								
	Blockly.Msg.LANG_DICTIONARIES_CREATE_EMPTY_TITLE = 'criar dicionário vazio ';																								
	Blockly.Msg.LANG_DICTIONARIES_CREATE_WITH_EMPTY_HELPURL = 'https://docs.kodular.io/Blocos/dictionaries#create-empty-dictionary ';																								
																										
	Blockly.Msg.LANG_DICTIONARIES_MAKE_DICTIONARY_TITLE = 'fazer um dicionário ';																								
	Blockly.Msg.LANG_DICTIONARIES_MAKE_DICTIONARY_TOOLTIP = 'Criar um dicionário. ';																								
	Blockly.Msg.LANG_DICTIONARIES_MAKE_DICTIONARY_HELPURL = 'https://docs.kodular.io/Blocos/dictionaries#make-a-dictionary ';																								
																										
	Blockly.Msg.LANG_DICTIONARIES_CREATE_WITH_CONTAINER_TITLE_ADD = 'dict ';																								
	Blockly.Msg.LANG_DICTIONARIES_CREATE_WITH_CONTAINER_TOOLTIP = 'Adicionar, remover ou seções de reordenamento para reconfigurar este bloco dicionário. ';																								
																										
	Blockly.Msg.LANG_DICTIONARIES_PAIR_TITLE = 'par';																								
	Blockly.Msg.LANG_DICTIONARIES_PAIR_TOOLTIP = 'Adicione um par ao dicionário. ';																								
	Blockly.Msg.LANG_DICTIONARIES_PAIR_HELPURL = 'https://docs.kodular.io/Blocos/dictionaries#pair ';																								
																										
	Blockly.Msg.LANG_DICTIONARIES_PAIR_INPUT = 'Chave %1 valor %2' ;																								
	Blockly.Msg.LANG_DICTIONARIES_PAIR_TOOLTIP = 'Cria um par com a chave e o valor previsto. ';																								
	Blockly.Msg.LANG_DICTIONARIES_MAKE_PAIR_TITLE = 'fazer um par ';																								
																										
	Blockly.Msg.LANG_DICTIONARIES_SET_PAIR_INPUT = 'valor ajustado para a chave %1 no dicionário %2 para %3' ;																								
	Blockly.Msg.LANG_DICTIONARIES_SET_PAIR_TITLE = 'Conjunto par Dict ';																								
	Blockly.Msg.LANG_DICTIONARIES_SET_PAIR_TOOLTIP = 'Definir um par num dicionário.';																								
	Blockly.Msg.LANG_DICTIONARIES_SET_PAIR_HELPURL = 'https://docs.kodular.io/Blocos/dictionaries#set-value-for-key ';																								
																										
	Blockly.Msg.LANG_DICTIONARIES_DELETE_PAIR_INPUT = 'remover entrada de chave %2 de dicionário %1' ;																								
	Blockly.Msg.LANG_DICTIONARIES_DELETE_PAIR_TITLE = 'remover a entrada para a chave do dicionário ';																								
	Blockly.Msg.LANG_DICTIONARIES_DELETE_PAIR_TOOLTIP = 'Excluir um par em um dicionário, dada a sua chave. ';																								
	Blockly.Msg.LANG_DICTIONARIES_DELETE_PAIR_HELPURL = 'https://docs.kodular.io/Blocos/dictionaries#delete-entry-for-key ';																								
																										
	Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_LOOKUP_INPUT = 'obter o valor para a chave %1 no dicionário %2 ou se não for encontrado %3' ;																								
	Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_LOOKUP_TOOLTIP = 'Retorna o valor no dicionário associado à chave. ';																								
	Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_LOOKUP_TITLE = 'olhar para cima em um dict ';																								
	Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_LOOKUP_HELPURL = 'https://docs.kodular.io/Blocos/dictionaries#get-value-for-key ';																								
																										
	Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_RECURSIVE_LOOKUP_INPUT = 'obter o valor no caminho da chave %1 no dicionário %2 ou se não for encontrado %3' ;																								
	Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_RECURSIVE_LOOKUP_TOOLTIP = 'Retorna o valor no dicionário aninhado. ';																								
	Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_RECURSIVE_LOOKUP_TITLE = 'recursiva olhar em um dicionário ';																								
	Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_RECURSIVE_LOOKUP_HELPURL = 'https://docs.kodular.io/Blocos/dictionaries#get-value-at-key-path ';																								
																										
	Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_RECURSIVE_SET_INPUT = 'valor definido para o caminho de chave %1 no dicionário %2 para%3' ;																								
	Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_RECURSIVE_SET_TOOLTIP = 'Define o valor de um caminho em uma árvore a partir do dicionário de dados. ';																								
	Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_RECURSIVE_SET_TITLE = 'valor definido pelo caminho da chave do dicionário ';																								
	Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_RECURSIVE_SET_HELPURL = 'https://docs.kodular.io/Blocos/dictionaries#set-value-for-key-path ';																								
																										
	Blockly.Msg.LANG_DICTIONARIES_GETTERS_TITLE = 'pegue';																								
	Blockly.Msg.LANG_DICTIONARIES_GET_KEYS_TITLE = 'chaves';																								
	Blockly.Msg.LANG_DICTIONARIES_GET_KEYS_INPUT = 'dicionário';																								
	Blockly.Msg.LANG_DICTIONARIES_GET_KEYS_TOOLTIP = 'Retorna uma lista de todas as chaves no dicionário. ';																								
	Blockly.Msg.LANG_DICTIONARIES_GET_KEYS_HELPURL = 'https://docs.kodular.io/Blocos/dictionaries#get-keys';																								
	Blockly.Msg.LANG_DICTIONARIES_GET_KEYS_TYPEBLOCK = 'obter as chaves';																								
																										
	Blockly.Msg.LANG_DICTIONARIES_GET_VALUES_TITLE = 'valores';																								
	Blockly.Msg.LANG_DICTIONARIES_GET_VALUES_INPUT = 'dicionário';																								
	Blockly.Msg.LANG_DICTIONARIES_GET_VALUES_TOOLTIP = 'Retorna uma lista de todos os valores no dicionário. ';																								
	Blockly.Msg.LANG_DICTIONARIES_GET_VALUES_HELPURL = 'https://docs.kodular.io/Blocos/dictionaries#get-values';																								
	Blockly.Msg.LANG_DICTIONARIES_GET_KEYS_TYPEBLOCK = 'obter valores';																								
																										
	Blockly.Msg.LANG_DICTIONARIES_IS_KEY_IN_INPUT = 'é a chave no dicionário? chave %1 dicionário %2' ;																								
	Blockly.Msg.LANG_DICTIONARIES_IS_KEY_IN_TOOLTIP = 'Verifique se a chave está em um dicionário. ';																								
	Blockly.Msg.LANG_DICTIONARIES_IS_KEY_IN_TITLE = 'é a chave para dict? ';																								
	Blockly.Msg.LANG_DICTIONARIES_IS_KEY_IN_HELPURL = 'https://docs.kodular.io/Blocos/dictionaries#is-key-in-dictionary ';																								
																										
	Blockly.Msg.LANG_DICTIONARIES_LENGTH_TITLE = 'tamanho de dicionário ';																								
	Blockly.Msg.LANG_DICTIONARIES_LENGTH_INPUT = 'dicionário';																								
	Blockly.Msg.LANG_DICTIONARIES_LENGTH_TOOLTIP = 'Retorna o número de pares chave-valor no dicionário. ';																								
	Blockly.Msg.LANG_DICTIONARIES_LENGTH_HELPURL = 'https://docs.kodular.io/Blocos/dictionaries#size-of-dictionary ';																								
																										
	Blockly.Msg.LANG_DICTIONARIES_ALIST_TO_DICT_TITLE = 'lista de pares ao dicionário ';																								
	Blockly.Msg.LANG_DICTIONARIES_ALIST_TO_DICT_INPUT = 'pares';																								
	Blockly.Msg.LANG_DICTIONARIES_ALIST_TO_DICT_TOOLTIP = 'Converte uma lista de pares para um dicionário. ';																								
	Blockly.Msg.LANG_DICTIONARIES_ALIST_TO_DICT_HELPURL = 'https://docs.kodular.io/Blocos/dictionaries#list-of-pairs-to-dictionary ';																								
																										
	Blockly.Msg.LANG_DICTIONARIES_DICT_TO_ALIST_TITLE = 'dicionário à lista de pares';																								
	Blockly.Msg.LANG_DICTIONARIES_DICT_TO_ALIST_INPUT = 'dicionário';																								
	Blockly.Msg.LANG_DICTIONARIES_DICT_TO_ALIST_TOOLTIP = 'Converte um dicionário para uma lista de pares.';																								
	Blockly.Msg.LANG_DICTIONARIES_DICT_TO_ALIST_HELPURL = 'https://docs.kodular.io/Blocos/dictionaries#dictionary-to-list-of-pairs';																								
																										
	Blockly.Msg.LANG_DICTIONARIES_COPY_TITLE = 'copiar dicionário ';																								
	Blockly.Msg.LANG_DICTIONARIES_COPY_INPUT = 'dicionário';																								
	Blockly.Msg.LANG_DICTIONARIES_COPY_TOOLTIP = 'Retorna uma cópia superficial do dicionário ';																								
	Blockly.Msg.LANG_DICTIONARIES_COPY_HELPURL = 'https://docs.kodular.io/Blocos/dictionaries#copy-dictionary ';																								
																										
	Blockly.Msg.LANG_DICTIONARIES_COMBINE_DICTS_INPUT = 'intercalação do dicionário %1 e do dicionário %2' ;																								
	Blockly.Msg.LANG_DICTIONARIES_COMBINE_DICTS_TOOLTIP = 'Cópias dos pares do "From" do dicionário para o dicionário "Para". ';																								
	Blockly.Msg.LANG_DICTIONARIES_COMBINE_DICTS_TITLE = 'combinar dicionários';																								
	Blockly.Msg.LANG_DICTIONARIES_COMBINE_DICTS_HELPURL = 'https://docs.kodular.io/Blocos/dictionaries#merge-into-dictionary ';																								
																										
	Blockly.Msg.LANG_DICTIONARIES_WALK_TREE_TITLE = 'lista andando chave caminho %1 em dicionário ou lista %2' ;																								
	Blockly.Msg.LANG_DICTIONARIES_WALK_TREE_TOOLTIP = 'Começa a partir do dicionário de dados e segue e seus filhos  chaves baseadas no caminho dado, retornando uma lista de nós encontrado no final da caminhada.';																								
	Blockly.Msg.LANG_DICTIONARIES_WALK_TREE_HELPURL = 'https://docs.kodular.io/Blocos/dictionaries#list-by-walking-key-path ';																								
																										
	Blockly.Msg.LANG_DICTIONARIES_WALK_TREE_ALL_TITLE = 'andar toda a nível ';																								
	Blockly.Msg.LANG_DICTIONARIES_WALK_TREE_ALL_TOOLTIP = 'Utilizada na lista por andar bloco caminho da chave, explora cada nó em um determinado nível na caminhada. ';																								
	Blockly.Msg.LANG_DICTIONARIES_WALK_TREE_ALL_HELPURL = 'https://docs.kodular.io/Blocos/dictionaries#walk-all-at-level ';																								
																										
	Blockly.Msg.LANG_DICTIONARIES_IS_DICT_TITLE = 'é um dicionário?  %1' ;																								
	Blockly.Msg.LANG_DICTIONARIES_IS_DICT_TOOLTIP = 'Testes se algo é um dicionário. ';																								
	Blockly.Msg.LANG_DICTIONARIES_IS_DICT_HELPURL = 'https://docs.kodular.io/Blocos/dictionaries#is-a-dictionary ';																								
																									
// Variables Blocks.																									
	Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_HELPURL = 'https://docs.kodular.io/Blocos/variables#global ';																								
	Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TITLE_INIT = 'initialize global ';																								
	Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_NAME = 'nome';																								
	Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TO = 'para';																								
	Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_COLLAPSED_TEXT = 'global';																								
	Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TOOLTIP = 'Cria uma variável global e dá-lhe o valor dos blocos ligados.';																								
	Blockly.Msg.LANG_VARIABLES_GLOBAL_PREFIX = 'global';																								
																										
	Blockly.Msg.LANG_VARIABLES_GET_HELPURL = 'https://docs.kodular.io/Blocos/variables#get ';																								
	Blockly.Msg.LANG_VARIABLES_GET_TITLE_GET = 'pegue';																								
	/* Blockly.Msg.LANG_VARIABLES_GET_INPUT_ITEM = 'item'; */ // [lyn, 10/14/13] não utilizado																								
	Blockly.Msg.LANG_VARIABLES_GET_COLLAPSED_TEXT = 'pegue';																								
	Blockly.Msg.LANG_VARIABLES_GET_TOOLTIP = 'Retorna o valor dessa variável. ';																								
																										
	Blockly.Msg.LANG_VARIABLES_SET_HELPURL = 'https://docs.kodular.io/Blocos/variables#set ';																								
	Blockly.Msg.LANG_VARIABLES_SET_TITLE_SET = 'conjunto';																								
	/* Blockly.Msg.LANG_VARIABLES_SET_INPUT_ITEM = 'item'; */ // [lyn, 10/14/13] não utilizado																								
	Blockly.Msg.LANG_VARIABLES_SET_TITLE_TO = 'para';																								
	Blockly.Msg.LANG_VARIABLES_SET_COLLAPSED_TEXT = 'conjunto';																								
	Blockly.Msg.LANG_VARIABLES_SET_TOOLTIP = 'Define esta variável a ser igual à entrada.';																								
	Blockly.Msg.LANG_VARIABLES_VARIABLE = 'variável';																								
																										
	Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_HELPURL = 'https://docs.kodular.io/Blocos/variables#do ';																								
	Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TITLE_INIT = 'inicializar local ';																								
	Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_DEFAULT_NAME = 'nome';																								
	Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_INPUT_TO = 'para';																								
	Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_IN_DO = 'no';																								
	Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_COLLAPSED_TEXT = 'local';																								
	Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TOOLTIP = 'Permite criar variáveis ​​que são acessíveis apenas na parte afazeres deste bloco. ';																								
	Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TRANSLATED_NAME = 'inicializar local em fazer ';																								
																										
	Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_HELPURL = 'https://docs.kodular.io/Blocos/variables#return ';																								
	/* // These don't differ between the statement and expression																									
	Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TITLE_INIT = 'inicializar local ';																								
	Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_INPUT_NAME = 'nome';																								
	Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_INPUT_TO = 'para';																								
	*/																									
	Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_IN_RETURN = 'no';																								
	Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_COLLAPSED_TEXT = 'local';																								
	Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TOOLTIP = 'Permite criar variáveis ​​que são acessíveis apenas na parte de retorno deste bloco. ';																								
	Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TRANSLATED_NAME = 'inicializar local em retorno ';																								
																										
	Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_CONTAINER_TITLE_LOCAL_NAMES = 'nomes locais';																								
	Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_CONTAINER_TOOLTIP = '';																								
																										
	Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_ARG_TITLE_NAME = 'nome';																								
	Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_ARG_DEFAULT_VARIABLE = 'x ';																								
																									
// Procedures Blocks.																									
	Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_HELPURL = 'https://docs.kodular.io/Blocos/procedures#do ';																								
	Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DEFINE = 'para';																								
	Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_PROCEDURE = 'procedimento';																								
	Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DO = 'Faz';																								
	Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_COLLAPSED_PREFIX = 'para';																								
	Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_TOOLTIP = 'Um procedimento que não retorna um valor. ';																								
																										
	Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_HELPURL = 'https://docs.kodular.io/Blocos/procedures#doreturn ';																								
	Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_THEN_RETURN = 'resultado';																								
	Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_DO = 'Faz';																								
	Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_RETURN = 'resultado';																								
	Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_TOOLTIP = 'Executa os blocos em \'fazer\' e retorna um comunicado. Útil se você precisa para executar um procedimento antes de devolver um valor a uma variável. ';																								
	Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_COLLAPSED_TEXT = 'fazer resultado / ';																								
																										
	Blockly.Msg.LANG_PROCEDURES_DEFRETURN_HELPURL = 'https://docs.kodular.io/Blocos/procedures#return ';																								
	Blockly.Msg.LANG_PROCEDURES_DEFRETURN_DEFINE = 'para';																								
	Blockly.Msg.LANG_PROCEDURES_DEFRETURN_PROCEDURE = 'Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_PROCEDURE';																								
	Blockly.Msg.LANG_PROCEDURES_DEFRETURN_DO = 'Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DO';																								
	Blockly.Msg.LANG_PROCEDURES_DEFRETURN_RETURN = 'resultado';																								
	Blockly.Msg.LANG_PROCEDURES_DEFRETURN_COLLAPSED_PREFIX = 'para';																								
	Blockly.Msg.LANG_PROCEDURES_DEFRETURN_TOOLTIP = 'Um procedimento de retornar um valor de resultado. ';																								
																										
	Blockly.Msg.LANG_PROCEDURES_DEF_DUPLICATE_WARNING = 'Aviso:\nEste procedimento tem US\nentradas duplicadas. ';																								
																										
	Blockly.Msg.LANG_PROCEDURES_GET_HELPURL = 'https://docs.kodular.io/Blocos/procedures#get ';																								
																										
	Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_HELPURL = 'https://docs.kodular.io/Blocos/procedures#do ';																								
	Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_CALL = 'ligar';																								
	Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_PROCEDURE = 'procedimento';																								
	Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_COLLAPSED_PREFIX = 'ligar';																								
	Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_TOOLTIP = 'Chamar um procedimento com nenhum valor de retorno. ';																								
	Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_TRANSLATED_NAME = 'chamar não retorno ';																								
																										
	Blockly.Msg.LANG_PROCEDURES_CALLRETURN_HELPURL = 'https://docs.kodular.io/Blocos/procedures#return ';																								
	Blockly.Msg.LANG_PROCEDURES_CALLRETURN_CALL = 'Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_CALL';																								
	Blockly.Msg.LANG_PROCEDURES_CALLRETURN_PROCEDURE = 'Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_PROCEDURE';																								
	Blockly.Msg.LANG_PROCEDURES_CALLRETURN_COLLAPSED_PREFIX = 'ligar';																								
	Blockly.Msg.LANG_PROCEDURES_CALLRETURN_TOOLTIP = 'Chamar um procedimento com um valor de retorno. ';																								
	Blockly.Msg.LANG_PROCEDURES_CALLRETURN_TRANSLATED_NAME = 'chamada de retorno ';																								
																										
	Blockly.Msg.LANG_PROCEDURES_MUTATORCONTAINER_TITLE = 'inputs';																								
	Blockly.Msg.LANG_PROCEDURES_MUTATORARG_TITLE = 'entrada:';																								
																										
	Blockly.Msg.LANG_PROCEDURES_HIGHLIGHT_DEF = 'Destaque Procedimento ';																								
																										
	Blockly.Msg.LANG_PROCEDURES_MUTATORCONTAINER_TOOLTIP = '';																								
	Blockly.Msg.LANG_PROCEDURES_MUTATORARG_TOOLTIP = '';																								
																									
// Components Blocks.																									
	Blockly.Msg.UNDEFINED_BLOCK_TOOLTIP = 'Este bloco não está definido. Excluir este bloco ';																								
																									
	Blockly.Msg.LANG_COMPONENT_BLOCK_HELPURL = '';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_TITLE_WHEN = 'quando';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_TITLE_DO = 'Faz';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_EVENT_TITLE = 'quando qualquer ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_METHOD_HELPURL = '';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_METHOD_TITLE_CALL = 'ligar';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_HELPURL = '';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_TITLE_CALL = 'ligar';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_TITLE_FOR_COMPONENT = 'para o componente ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_GETTER_HELPURL = '';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_GETTER_HELPURL = '';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_GETTER_TITLE_OF_COMPONENT = 'do componente ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_HELPURL = '';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_TITLE_SET = 'conjunto';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_TITLE_TO = 'para';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_HELPURL = '';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_SET = 'conjunto';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_TO = 'para';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_OF_COMPONENT = 'do componente ';																								
																										
///////////////////																									
/* HelpURLs for Component Blocks */																									
																									
//User Interface Components																									
	Blockly.Msg.LANG_COMPONENT_BLOCK_BOTTOM_SHEET_HELPURL = 'https://docs.kodular.io/components/user-interface/bottom-sheet ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_BOTTOM_SHEET_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/bottom-sheet ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_BOTTOM_SHEET_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/bottom-sheet ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_BOTTOM_SHEET_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/bottom-sheet ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_HELPURL = 'https://docs.kodular.io/components/user-interface/button ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/button ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/button ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/button ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_CHAT_VIEW_HELPURL = 'https://docs.kodular.io/components/user-interface/chat-view ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CHAT_VIEW_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/chat-view ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CHAT_VIEW_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/chat-view ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CHAT_VIEW_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/chat-view ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_HELPURL = 'https://docs.kodular.io/components/user-interface/checkbox ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/checkbox ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/checkbox ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/checkbox ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_CIRCULAR_PROGRESS_HELPURL = 'https://docs.kodular.io/components/user-interface/circular-progress';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CIRCULAR_PROGRESS_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/circular-progress';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CIRCULAR_PROGRESS_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/circular-progress';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CIRCULAR_PROGRESS_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/circular-progress';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_DATE_PICKER_HELPURL = 'https://docs.kodular.io/components/user-interface/date-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_DATE_PICKER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/date-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_DATE_PICKER_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/date-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_DATE_PICKER_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/date-picker ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_FLOATING_ACTION_BUTTON_HELPURL = 'https://docs.kodular.io/components/user-interface/floating-action-button ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_FLOATING_ACTION_BUTTON_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/floating-action-button ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_FLOATING_ACTION_BUTTON_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/floating-action-button ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_FLOATING_ACTION_BUTTON_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/floating-action-button ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_HELPURL = 'https://docs.kodular.io/components/user-interface/image ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/image ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/image ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/image ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_HELPURL = 'https://docs.kodular.io/components/user-interface/label ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/label ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/label ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/label ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_LINEAR_PROGRESSBAR_HELPURL = 'https://docs.kodular.io/components/user-interface/linear-progressbar ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_LINEAR_PROGRESSBAR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/linear-progressbar ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_LINEAR_PROGRESSBAR_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/linear-progressbar ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_LINEAR_PROGRESSBAR_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/linear-progressbar ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_HELPURL = 'https://docs.kodular.io/components/user-interface/list-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/list-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/list-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/list-picker ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_LIST_VIEW_HELPURL = 'https://docs.kodular.io/components/user-interface/list-view ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_LIST_VIEW_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/list-view ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_LIST_VIEW_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/list-view ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_LIST_VIEW_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/list-view ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_LIST_VIEW_IMAGE_TEXT_HELPURL = 'https://docs.kodular.io/components/user-interface/list-view-image-and-text ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_LIST_VIEW_IMAGE_TEXT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/list-view-image-and-text ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_LIST_VIEW_IMAGE_TEXT_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/list-view-image-and-text ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_LIST_VIEW_IMAGE_TEXT_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/list-view-image-and-text ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_HELPURL = 'https://docs.kodular.io/components/user-interface/notifier ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/notifier ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/notifier ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/notifier ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_RADIO_BUTTON_HELPURL = 'https://docs.kodular.io/components/user-interface/radio-button ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_RADIO_BUTTON_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/radio-button ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_RADIO_BUTTON_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/radio-button ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_RADIO_BUTTON_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/radio-button ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_HELPURL = 'https://docs.kodular.io/components/screen ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/screen ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_EVENTS_HELPURL = 'https://docs.kodular.io/components/screen ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_METHODS_HELPURL = 'https://docs.kodular.io/components/screen ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_RATING_BAR_HELPURL = 'https://docs.kodular.io/components/user-interface/rating-bar ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_RATING_BAR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/rating-bar ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_RATING_BAR_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/rating-bar ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_RATING_BAR_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/rating-bar ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_HELPURL = 'https://docs.kodular.io/components/user-interface/slider ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/slider ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/slider ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/slider ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_SNACKBAR_HELPURL = 'https://docs.kodular.io/components/user-interface/snackbar ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SNACKBAR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/snackbar ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SNACKBAR_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/snackbar ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SNACKBAR_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/snackbar ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_SPINNER_HELPURL = 'https://docs.kodular.io/components/user-interface/spinner ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SPINNER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/spinner ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SPINNER_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/spinner ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SPINNER_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/spinner ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_SPOTLIGHT_HELPURL = 'https://docs.kodular.io/components/user-interface/spotlight ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SPOTLIGHT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/spotlight ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SPOTLIGHT_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/spotlight ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SPOTLIGHT_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/spotlight ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_SWITCH_HELPURL = 'https://docs.kodular.io/components/user-interface/switch ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SWITCH_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/switch ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SWITCH_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/switch ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SWITCH_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/switch ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_TAB_LAYOUT_HELPURL = 'https://docs.kodular.io/components/user-interface/tab-layout ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_TAB_LAYOUT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/tab-layout ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_TAB_LAYOUT_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/tab-layout ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_TAB_LAYOUT_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/tab-layout ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_HELPURL = 'https://docs.kodular.io/components/user-interface/textbox ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/textbox ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/textbox ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/textbox ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_TIME_PICKER_HELPURL = 'https://docs.kodular.io/components/user-interface/time-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_TIME_PICKER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/time-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_TIME_PICKER_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/time-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_TIME_PICKER_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/time-picker ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_VIEW_FLIPPER_HELPURL = 'https://docs.kodular.io/components/user-interface/view-flipper ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_VIEW_FLIPPER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/view-flipper ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_VIEW_FLIPPER_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/view-flipper ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_VIEW_FLIPPER_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/view-flipper ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_VIEW_PAGER_HELPURL = 'https://docs.kodular.io/components/user-interface/view-pager ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_VIEW_PAGER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/view-pager ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_VIEW_PAGER_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/view-pager ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_VIEW_PAGER_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/view-pager ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_HELPURL = 'https://docs.kodular.io/components/user-interface/web-viewer ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/webviewer ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/webviewer ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/webviewer ';																								
																									
//Layout components																									
	Blockly.Msg.LANG_COMPONENT_BLOCK_CARD_VIEW_HELPURL = 'https://docs.kodular.io/components/layout/card-view ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CARD_VIEW_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/layout/card-view ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CARD_VIEW_EVENTS_HELPURL = 'https://docs.kodular.io/components/layout/card-view ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZONTAL_ARRANGEMENT_HELPURL = 'https://docs.kodular.io/components/layout/horizontal-arrangement ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZONTAL_ARRANGEMENT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/layout/horizontal-arrangement ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZONTAL_ARRANGEMENT_EVENTS_HELPURL = 'https://docs.kodular.io/components/layout/horizontal-arrangement ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZONTAL_SCROLL_ARRANGEMENT_HELPURL = 'https://docs.kodular.io/components/layout/horizontal-scroll-arrangement ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZONTAL_SCROLL_ARRANGEMENT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/layout/horizontal-scroll-arrangement ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZONTAL_SCROLL_ARRANGEMENT_EVENTS_HELPURL = 'https://docs.kodular.io/components/layout/horizontal-scroll-arrangement ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_SIDE_MENU_LAYOUT_HELPURL = 'https://docs.kodular.io/components/layout/side-menu-layout ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SIDE_MENU_LAYOUT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/layout/side-menu-layout ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SIDE_MENU_LAYOUT_EVENTS_HELPURL = 'https://docs.kodular.io/components/layout/side-menu-layout ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SIDE_MENU_LAYOUT_METHODS_HELPURL = 'https://docs.kodular.io/components/layout/side-menu-layout ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_SPACE_HELPURL = 'https://docs.kodular.io/components/layout/space ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SPACE_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/layout/space ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_SURFACE_VIEW_HELPURL = 'https://docs.kodular.io/components/layout/surface-view ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SURFACE_VIEW_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/layout/surface-view ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SURFACE_VIEW_EVENTS_HELPURL = 'https://docs.kodular.io/components/layout/surface-view ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SURFACE_VIEW_METHODS_HELPURL = 'https://docs.kodular.io/components/layout/surface-view ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_SWIPE_REFRESH_LAYOUT_HELPURL = 'https://docs.kodular.io/components/layout/swipe-refresh-layout ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SWIPE_REFRESH_LAYOUT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/layout/swipe-refresh-layout ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SWIPE_REFRESH_LAYOUT_EVENTS_HELPURL = 'https://docs.kodular.io/components/layout/swipe-refresh-layout ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_TABLE_ARRANGEMENT_HELPURL = 'https://docs.kodular.io/components/layout/table-arrangement ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_TABLE_ARRANGEMENT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/layout/table-arrangement/ ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_VERTICAL_ARRANGEMENT_HELPURL = 'https://docs.kodular.io/components/layout/vertical-arrangement ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_VERTICAL_ARRANGEMENT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/layout/vertical-arrangement ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_VERTICAL_ARRANGEMENT_EVENTS_HELPURL = 'https://docs.kodular.io/components/layout/vertical-arrangement ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_VERTICAL_SCROLL_ARRANGEMENT_HELPURL = 'https://docs.kodular.io/components/layout/vertical-scroll-arrangement ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_VERTICAL_SCROLL_ARRANGEMENT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/layout/vertical-scroll-arrangement ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_VERTICAL_SCROLL_ARRANGEMENT_EVENTS_HELPURL = 'https://docs.kodular.io/components/layout/vertical-scroll-arrangement ';																								
																									
//Media components																									
	Blockly.Msg.LANG_COMPONENT_BLOCK_AUDIO_PICKER_HELPURL = 'https://docs.kodular.io/components/media/audio-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_AUDIO_PICKER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/audio-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_AUDIO_PICKER_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/audio-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_AUDIO_PICKER_METHODS_HELPURL = 'https://docs.kodular.io/components/media/audio-picker ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_HELPURL = 'https://docs.kodular.io/components/media/camcorder ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/camcorder ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/camcorder ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_METHODS_HELPURL = 'https://docs.kodular.io/components/media/camcorder ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_HELPURL = 'https://docs.kodular.io/components/media/camera ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/camera ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/camera ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_METHODS_HELPURL = 'https://docs.kodular.io/components/media/camera ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_EXOPLAYER_HELPURL = 'https://docs.kodular.io/components/media/exoplayer ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_EXOPLAYER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/exoplayer ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_EXOPLAYER_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/exoplayer ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_EXOPLAYER_METHODS_HELPURL = 'https://docs.kodular.io/components/media/exoplayer ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_PICKER_HELPURL = 'https://docs.kodular.io/components/media/image-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_PICKER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/image-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_PICKER_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/image-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_PICKER_METHODS_HELPURL = 'https://docs.kodular.io/components/media/image-picker ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_METADATA_HELPURL = 'https://docs.kodular.io/components/media/metadata ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_METADATA_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/metadata ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_METADATA_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/metadata ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_METADATA_METHODS_HELPURL = 'https://docs.kodular.io/components/media/metadata ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_OCR_HELPURL = 'https://docs.kodular.io/components/media/ocr ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_OCR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/ocr ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_OCR_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/ocr ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_OCR_METHODS_HELPURL = 'https://docs.kodular.io/components/media/ocr ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_HELPURL = 'https://docs.kodular.io/components/media/player ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/player ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/player ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_METHODS_HELPURL = 'https://docs.kodular.io/components/media/player ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_QR_CODE_HELPURL = 'https://docs.kodular.io/components/media/qr-code ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_QR_CODE_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/qr-code ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_QR_CODE_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/qr-code ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_QR_CODE_METHODS_HELPURL = 'https://docs.kodular.io/components/media/qr-code ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_HELPURL = 'https://docs.kodular.io/components/media/sound ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/sound ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/sound ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_METHODS_HELPURL = 'https://docs.kodular.io/components/media/sound ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_RECORDER_HELPURL = 'https://docs.kodular.io/components/media/sound-recorder ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_RECORDER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/soundrecorder ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_RECORDER_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/soundrecorder ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_RECORDER_METHODS_HELPURL = 'https://docs.kodular.io/components/media/soundrecorder ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECH_RECOGNIZER_HELPURL = 'https://docs.kodular.io/components/media/speech-recognizer ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECH_RECOGNIZER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/speechrecognizer ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECH_RECOGNIZER_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/speechrecognizer ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECH_RECOGNIZER_METHODS_HELPURL = 'https://docs.kodular.io/components/media/speechrecognizer ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_TEXT_TO_SPEECH_HELPURL = 'https://docs.kodular.io/components/media/text-to-speech ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_TEXT_TO_SPEECH_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/text-to-speech ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_TEXT_TO_SPEECH_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/text-to-speech ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_TEXT_TO_SPEECH_METHODS_HELPURL = 'https://docs.kodular.io/components/media/text-to-speech ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEO_PICKER_HELPURL = 'https://docs.kodular.io/components/media/video-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEO_PICKER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/video-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEO_PICKER_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/video-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEO_PICKER_METHODS_HELPURL = 'https://docs.kodular.io/components/media/video-picker ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEO_PLAYER_HELPURL = 'https://docs.kodular.io/components/media/video-player ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEO_PLAYER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/video-player ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEO_PLAYER_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/video-player ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEO_PLAYER_METHODS_HELPURL = 'https://docs.kodular.io/components/media/video-player ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_YANDEX_TRANSLATE_HELPURL = 'https://docs.kodular.io/components/media/yandex-translate ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_YANDEX_TRANSLATE_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/yandex-translate ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_YANDEX_TRANSLATE_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/yandex-translate ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_YANDEX_TRANSLATE_METHODS_HELPURL = 'https://docs.kodular.io/components/media/yandex-translate ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_YOUTUBE_PLAYER_HELPURL = 'https://docs.kodular.io/components/media/youtube-player ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_YOUTUBE_PLAYER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/youtube-player ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_YOUTUBE_PLAYER_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/youtube-player ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_YOUTUBE_PLAYER_METHODS_HELPURL = 'https://docs.kodular.io/components/media/youtube-player ';																								
																									
// Drawing and Animation components																									
	Blockly.Msg.LANG_COMPONENT_BLOCK_ANIMATION_UTIL_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/animation-util ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_ANIMATION_UTIL_EVENTS_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/animation-util ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_ANIMATION_UTIL_METHODS_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/animation-util ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/ball ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/ball ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_EVENTS_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/ball ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_METHODS_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/ball ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/canvas';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/canvas';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_EVENTS_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/canvas';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_METHODS_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/canvas';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_EDITOR_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/image-editor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_EDITOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/image-editor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_EDITOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/image-editor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_EDITOR_METHODS_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/image-editor ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_SPRITE_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/image-sprite ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_SPRITE_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/imagesprite ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_SPRITE_EVENTS_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/imagesprite ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_SPRITE_METHODS_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/imagesprite ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_LOTTIE_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/lottie ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_LOTTIE_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/lottie ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_LOTTIE_EVENTS_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/lottie ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_LOTTIE_METHODS_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/lottie/ ';																								
																									
//Map components																									
	Blockly.Msg.LANG_COMPONENT_BLOCK_CIRCLE_HELPURL = 'https://docs.kodular.io/components/maps/circle ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CIRCLE_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/maps/circle ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CIRCLE_EVENTS_HELPURL = 'https://docs.kodular.io/components/maps/circle ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CIRCLE_METHODS_HELPURL = 'https://docs.kodular.io/components/maps/circle ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_FEATURE_COLLECTION_HELPURL = 'https://docs.kodular.io/components/maps/feature-collection ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_FEATURE_COLLECTION_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/maps/feature-collection ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_FEATURE_COLLECTION_EVENTS_HELPURL = 'https://docs.kodular.io/components/maps/feature-collection ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_FEATURE_COLLECTION_METHODS_HELPURL = 'https://docs.kodular.io/components/maps/feature-collection ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_LINE_STRING_HELPURL = 'https://docs.kodular.io/components/maps/line-string ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_LINE_STRING_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/maps/line-string ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_LINE_STRING_EVENTS_HELPURL = 'https://docs.kodular.io/components/maps/line-string ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_LINE_STRING_METHODS_HELPURL = 'https://docs.kodular.io/components/maps/line-string ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_MAP_HELPURL = 'https://docs.kodular.io/components/maps/map ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_MAP_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/maps/map ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_MAP_EVENTS_HELPURL = 'https://docs.kodular.io/components/maps/map ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_MAP_METHODS_HELPURL = 'https://docs.kodular.io/components/maps/map ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_MARKER_HELPURL = 'https://docs.kodular.io/components/maps/marker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_MARKER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/maps/marker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_MARKER_EVENTS_HELPURL = 'https://docs.kodular.io/components/maps/marker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_MARKER_METHODS_HELPURL = 'https://docs.kodular.io/components/maps/marker ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_POLYGON_HELPURL = 'https://docs.kodular.io/components/maps/polygon ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_POLYGON_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/maps/polygon ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_POLYGON_EVENTS_HELPURL = 'https://docs.kodular.io/components/maps/polygon ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_POLYGON_METHODS_HELPURL = 'https://docs.kodular.io/components/maps/polygon ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_RECTANGLE_HELPURL = 'https://docs.kodular.io/components/maps/rectangle ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_RECTANGLE_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/maps/rectangle ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_RECTANGLE_EVENTS_HELPURL = 'https://docs.kodular.io/components/maps/rectangle ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_RECTANGLE_METHODS_HELPURL = 'https://docs.kodular.io/components/maps/rectangle ';																								
																									
//Sensor components																									
	Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETER_SENSOR_HELPURL = 'https://docs.kodular.io/components/sensors/accelerometer ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETER_SENSOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/accelerometer ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETER_SENSOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/accelerometer ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODE_SCANNER_HELPURL = 'https://docs.kodular.io/components/sensors/barcode-scanner ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODE_SCANNER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/barcode-scanner ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODE_SCANNER_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/barcode-scanner ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODE_SCANNER_METHODS_HELPURL = 'https://docs.kodular.io/components/sensors/barcode-scanner ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_HELPURL = 'https://docs.kodular.io/components/sensors/clock ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/clock ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/clock ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_METHODS_HELPURL = 'https://docs.kodular.io/components/sensors/clock ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_FINGERPRINT_HELPURL = 'https://docs.kodular.io/components/sensors/fingerprint ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_FINGERPRINT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/fingerprint ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_FINGERPRINT_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/fingerprint ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_FINGERPRINT_METHODS_HELPURL = 'https://docs.kodular.io/components/sensors/fingerprint ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_GRAVITY_SENSOR_HELPURL = 'https://docs.kodular.io/components/sensors/gravity-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_GRAVITY_SENSOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/gravity-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_GRAVITY_SENSOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/gravity-sensor ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPE_SENSOR_HELPURL = 'https://docs.kodular.io/components/sensors/gyroscope-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPE_SENSOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/gyroscope-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPE_SENSOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/gyroscope-sensor ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_LIGHT_SENSOR_HELPURL = 'https://docs.kodular.io/components/sensors/light-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_LIGHT_SENSOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/light-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_LIGHT_SENSOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/light-sensor ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATION_SENSOR_HELPURL = 'https://docs.kodular.io/components/sensors/location-sensor/ ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATION_SENSOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/location-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATION_SENSOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/location-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATION_SENSOR_METHODS_HELPURL = 'https://docs.kodular.io/components/sensors/location-sensor ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_MAGNETIC_FIELD_SENSOR_HELPURL = 'https://docs.kodular.io/components/sensors/magnetic-field-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_MAGNETIC_FIELD_SENSOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/magnetic-field-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_MAGNETIC_FIELD_SENSOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/magnetic-field-sensor ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_NEARFIELD_HELPURL = 'https://docs.kodular.io/components/sensors/nearfield ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_NEARFIELD_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/nearfield ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_NEARFIELD_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/nearfield ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATION_SENSOR_HELPURL = 'https://docs.kodular.io/components/sensors/orientation-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATION_SENSOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/orientation-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATION_SENSOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/orientation-sensor ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_PEDOMETER_HELPURL = 'https://docs.kodular.io/components/sensors/pedometer ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_PEDOMETER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/pedometer ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_PEDOMETER_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/pedometer ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_PEDOMETER_METHODS_HELPURL = 'https://docs.kodular.io/components/sensors/pedometer ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_PRESSURE_SENSOR_HELPURL = 'https://docs.kodular.io/components/sensors/pressure-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_PRESSURE_SENSOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/pressure-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_PRESSURE_SENSOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/pressure-sensor ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_PROXIMITY_SENSOR_HELPURL = 'https://docs.kodular.io/components/sensors/proximity-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_PROXIMITY_SENSOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/proximity-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_PROXIMITY_SENSOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/proximity-sensor/ ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_SENSOR_HELPURL = 'https://docs.kodular.io/components/sensors/sound-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_SENSOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/sound-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_SENSOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/sound-sensor ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_TEMPERATURE_SENSOR_HELPURL = 'https://docs.kodular.io/components/sensors/temperature-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_TEMPERATURE_SENSOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/temperature-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_TEMPERATURE_SENSOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/temperature-sensor ';																								
																									
//Social components																									
	Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACT_PICKER_HELPURL = 'https://docs.kodular.io/components/social/contact-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACT_PICKER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/social/contact-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACT_PICKER_EVENTS_HELPURL = 'https://docs.kodular.io/components/social/contact-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACT_PICKER_METHODS_HELPURL = 'https://docs.kodular.io/components/social/contact-picker ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_EMAIL_PICKER_HELPURL = 'https://docs.kodular.io/components/social/email-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_EMAIL_PICKER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/social/email-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_EMAIL_PICKER_EVENTS_HELPURL = 'https://docs.kodular.io/components/social/email-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_EMAIL_PICKER_METHODS_HELPURL = 'https://docs.kodular.io/components/social/email-picker ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_PHONE_CALL_HELPURL = 'https://docs.kodular.io/components/social/phone-call ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_PHONE_CALL_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/social/phone-call ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_PHONE_CALL_EVENTS_HELPURL = 'https://docs.kodular.io/components/social/phone-call ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_PHONE_CALL_METHODS_HELPURL = 'https://docs.kodular.io/components/social/phone-call ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_PHONE_NUMBER_PICKER_HELPURL = 'https://docs.kodular.io/components/social/phone-number-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_PHONE_NUMBER_PICKER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/social/phone-number-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_PHONE_NUMBER_PICKER_EVENTS_HELPURL = 'https://docs.kodular.io/components/social/phone-number-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_PHONE_NUMBER_PICKER_METHODS_HELPURL = 'https://docs.kodular.io/components/social/phone-number-picker ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_SHARING_HELPURL = 'https://docs.kodular.io/components/social/sharing ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SHARING_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/social/sharing ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SHARING_EVENTS_HELPURL = 'https://docs.kodular.io/components/social/sharing ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SHARING_METHODS_HELPURL = 'https://docs.kodular.io/components/social/sharing ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_HELPURL = 'https://docs.kodular.io/components/social/texting ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/social/texting ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_EVENTS_HELPURL = 'https://docs.kodular.io/components/social/texting ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_METHODS_HELPURL = 'https://docs.kodular.io/components/social/texting ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_HELPURL = 'https://docs.kodular.io/components/social/twitter ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/social/twitter ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_EVENTS_HELPURL = 'https://docs.kodular.io/components/social/twitter ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_METHODS_HELPURL = 'https://docs.kodular.io/components/social/twitter ';																								
																									
//Storage Components																									
	Blockly.Msg.LANG_COMPONENT_BLOCK_CLOUDINARY_HELPURL = 'https://docs.kodular.io/components/storage/cloudinary ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CLOUDINARY_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/storage/cloudinary ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CLOUDINARY_EVENTS_HELPURL = 'https://docs.kodular.io/components/storage/cloudinary ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CLOUDINARY_METHODS_HELPURL = 'https://docs.kodular.io/components/storage/cloudinary ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_CRYPTOGRAPHY_HELPURL = 'https://docs.kodular.io/components/storage/cryptography ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CRYPTOGRAPHY_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/storage/cryptography ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CRYPTOGRAPHY_METHODS_HELPURL = 'https://docs.kodular.io/components/storage/cryptography ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_FILE_HELPURL = 'https://docs.kodular.io/components/storage/file ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_FILE_METHODS_HELPURL = 'https://docs.kodular.io/components/storage/file ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_FILE_EVENTS_HELPURL = 'https://docs.kodular.io/components/storage/file ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_DB_HELPURL = 'https://docs.kodular.io/components/storage/firebase-db ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_DB_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/storage/firebase-db ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_DB_METHODS_HELPURL = 'https://docs.kodular.io/components/storage/firebase-db ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_DB_EVENTS_HELPURL = 'https://docs.kodular.io/components/storage/firebase-db ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLES_CONTROL_HELPURL = 'https://docs.kodular.io/components/storage/fusiontables-control ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLES_CONTROL_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/storage/fusiontables-control ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLES_CONTROL_EVENTS_HELPURL = 'https://docs.kodular.io/components/storage/fusiontables-control ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLES_CONTROL_METHODS_HELPURL = 'https://docs.kodular.io/components/storage/fusiontables-control ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_HELPURL = 'https://docs.kodular.io/components/storage/tiny-db ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/storage/tiny-db ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_METHODS_HELPURL = 'https://docs.kodular.io/components/storage/tiny-db ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_HELPURL = 'https://docs.kodular.io/components/storage/tiny-web-db ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/storage/tiny-web-db ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_EVENTS_HELPURL = 'https://docs.kodular.io/components/storage/tiny-web-db ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_METHODS_HELPURL = 'https://docs.kodular.io/components/storage/tiny-web-db ';																								
																									
//Device components																									
	Blockly.Msg.LANG_COMPONENT_BLOCK_AUDIO_HELPURL = 'https://docs.kodular.io/components/device/audio ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_AUDIO_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/device/audio ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_AUDIO_METHODS_HELPURL = 'https://docs.kodular.io/components/device/audio ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_DEVICE_TOOLS_HELPURL = 'https://docs.kodular.io/components/device/device-tools';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_DEVICE_TOOLS_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/device/device-tools';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_DEVICE_TOOLS_METHODS_HELPURL = 'https://docs.kodular.io/components/device/device-tools';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_PACKAGE_HELPURL = 'https://docs.kodular.io/components/device/package ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_PACKAGE_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/device/package ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_PACKAGE_METHODS_HELPURL = 'https://docs.kodular.io/components/device/package ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_SCREENSHOT_HELPURL = 'https://docs.kodular.io/components/device/screenshot ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SCREENSHOT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/device/screenshot ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SCREENSHOT_EVENTS_HELPURL = 'https://docs.kodular.io/components/device/screenshot ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SCREENSHOT_METHODS_HELPURL = 'https://docs.kodular.io/components/device/screenshot ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_WALLPAPER_HELPURL = 'https://docs.kodular.io/components/device/wallpaper ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_WALLPAPER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/device/wallpaper ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_WALLPAPER_EVENTS_HELPURL = 'https://docs.kodular.io/components/device/wallpaper ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_WALLPAPER_METHODS_HELPURL = 'https://docs.kodular.io/components/device/wallpaper ';																								
																									
//Dynamic Components																									
	Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_BUTTON_HELPURL = 'https://docs.kodular.io/components/dynamic/dynamic-button ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_BUTTON_EVENTS_HELPURL = 'https://docs.kodular.io/components/dynamic/dynamic-button ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_BUTTON_METHODS_HELPURL = 'https://docs.kodular.io/components/dynamic/dynamic-button ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_LABEL_HELPURL = 'https://docs.kodular.io/components/dynamic/dynamic-label ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_LABEL_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/dynamic/dynamic-label ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_LABEL_EVENTS_HELPURL = 'https://docs.kodular.io/components/dynamic/dynamic-label ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_LABEL_METHODS_HELPURL = 'https://docs.kodular.io/components/dynamic/dynamic-label ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_TEXTBOX_HELPURL = 'https://docs.kodular.io/components/dynamic/dynamic-textbox ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_TEXTBOX_EVENTS_HELPURL = 'https://docs.kodular.io/components/dynamic/dynamic-textbox ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_TEXTBOX_METHODS_HELPURL = 'https://docs.kodular.io/components/dynamic/dynamic-textbox ';																								
																									
//Connectivity components																									
	Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_HELPURL = 'https://docs.kodular.io/components/connectivity/activity-starter ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/connectivity/activity-starter ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_EVENTS_HELPURL = 'https://docs.kodular.io/components/connectivity/activity-starter ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_METHODS_HELPURL = 'https://docs.kodular.io/components/connectivity/activity-starter ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_ARDUINO_HELPURL = 'https://docs.kodular.io/components/connectivity/arduino ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_ARDUINO_EVENTS_HELPURL = 'https://docs.kodular.io/components/connectivity/arduino ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_ARDUINO_METHODS_HELPURL = 'https://docs.kodular.io/components/connectivity/arduino ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHADMIN_HELPURL = 'https://docs.kodular.io/components/connectivity/bluetooth-admin';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHADMIN_PROPERTIES_HELPURL = 'hhttps: //docs.kodular.io/components/connectivity/bluetooth-admin';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHADMIN_EVENTS_HELPURL = 'https://docs.kodular.io/components/connectivity/bluetooth-admin';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHADMIN_METHODS_HELPURL = 'https://docs.kodular.io/components/connectivity/bluetooth-admin';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_HELPURL = 'https://docs.kodular.io/components/connectivity/bluetooth-client ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/connectivity/bluetooth-client ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_EVENTS_HELPURL = 'https://docs.kodular.io/components/connectivity/bluetooth-client ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_METHODS_HELPURL = 'https://docs.kodular.io/components/connectivity/bluetooth-client ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_HELPURL = 'https://docs.kodular.io/components/connectivity/bluetooth-server ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/connectivity/bluetooth-server ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_EVENTS_HELPURL = 'https://docs.kodular.io/components/connectivity/bluetooth-server ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_METHODS_HELPURL = 'https://docs.kodular.io/components/connectivity/bluetooth-server ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_DOWNLOAD_HELPURL = 'https://docs.kodular.io/components/connectivity/download ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_DOWNLOAD_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/connectivity/download ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_DOWNLOAD_EVENTS_HELPURL = 'https://docs.kodular.io/components/connectivity/download ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_DOWNLOAD_METHODS_HELPURL = 'https://docs.kodular.io/components/connectivity/download ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_FTP_HELPURL = 'https://docs.kodular.io/components/connectivity/ftp ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_FTP_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/connectivity/ftp ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_FTP_EVENTS_HELPURL = 'https://docs.kodular.io/components/connectivity/ftp ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_FTP_METHODS_HELPURL = 'https://docs.kodular.io/components/connectivity/ftp ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_NETWORK_HELPURL = 'https://docs.kodular.io/components/connectivity/network ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_NETWORK_EVENTS_HELPURL = 'https://docs.kodular.io/components/connectivity/network ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_NETWORK_METHODS_HELPURL = 'https://docs.kodular.io/components/connectivity/network ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_HELPURL = 'https://docs.kodular.io/components/connectivity/web ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/connectivity/web ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_EVENTS_HELPURL = 'https://docs.kodular.io/components/connectivity/web ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_METHODS_HELPURL = 'https://docs.kodular.io/components/connectivity/web ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_WIFI_HELPURL = 'https://docs.kodular.io/components/connectivity/wifi ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_WIFI_METHODS_HELPURL = 'https://docs.kodular.io/components/connectivity/wifi ';																								
																									
//Google components																									
																									
	Blockly.Msg.LANG_COMPONENT_BLOCK_GOOGLE_ACCOUNT_PICKER_HELPURL = 'https://docs.kodular.io/components/google/google-account-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_GOOGLE_ACCOUNT_PICKER_EVENTS_HELPURL = 'https://docs.kodular.io/components/google/google-account-picker ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_GOOGLE_ACCOUNT_PICKER_METHODS_HELPURL = 'https://docs.kodular.io/components/google/google-account-picker ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_GOOGLE_MAPS_HELPURL = 'https://docs.kodular.io/components/google/google-maps';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_GOOGLE_MAPS_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/google/google-maps';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_GOOGLE_MAPS_EVENTS_HELPURL = 'https://docs.kodular.io/components/google/google-maps';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_GOOGLE_MAPS_METHODS_HELPURL = 'https://docs.kodular.io/components/google/google-maps';																								
																									
//Monetization components																									
	Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_BANNER_HELPURL = 'https://docs.kodular.io/components/monetization/admob-banner ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_BANNER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/monetization/admob-banner ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_BANNER_EVENTS_HELPURL = 'https://docs.kodular.io/components/monetization/admob-banner ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_BANNER_METHODS_HELPURL = 'https://docs.kodular.io/components/monetization/admob-banner ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_INTERSTITIAL_HELPURL = 'https://docs.kodular.io/components/monetization/admob-interstitial ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_INTERSTITIAL_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/monetization/admob-interstitial ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_INTERSTITIAL_EVENTS_HELPURL = 'https://docs.kodular.io/components/monetization/admob-interstitial ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_INTERSTITIAL_METHODS_HELPURL = 'https://docs.kodular.io/components/monetization/admob-interstitial ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_REWARDED_VIDEO_HELPURL = 'https://docs.kodular.io/components/monetization/admob-rewardedvideo ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_REWARDED_VIDEO_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/monetization/admob-rewardedvideo ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_REWARDED_VIDEO_EVENTS_HELPURL = 'https://docs.kodular.io/components/monetization/admob-rewardedvideo ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_REWARDED_VIDEO_METHODS_HELPURL = 'https://docs.kodular.io/components/monetization/admob-rewardedvideo ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_AMAZON_BANNER_HELPURL = 'https://docs.kodular.io/components/monetization/amazon-banner ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_AMAZON_BANNER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/monetization/amazon-banner ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_AMAZON_BANNER_EVENTS_HELPURL = 'https://docs.kodular.io/components/monetization/amazon-banner ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_AMAZON_INTERSTITIAL_HELPURL = 'https://docs.kodular.io/components/monetization/amazon-interstitial ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_AMAZON_INTERSTITIAL_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/monetization/amazon-interstitial ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_AMAZON_INTERSTITIAL_EVENTS_HELPURL = 'https://docs.kodular.io/components/monetization/amazon-interstitial ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_AMAZON_INTERSTITIAL_METHODS_HELPURL = 'https://docs.kodular.io/components/monetization/amazon-interstitial ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_FACEBOOK_BANNER_HELPURL = 'https://docs.kodular.io/components/monetization/facebook-banner ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_FACEBOOK_BANNER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/monetization/facebook-banner ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_FACEBOOK_BANNER_EVENTS_HELPURL = 'https://docs.kodular.io/components/monetization/facebook-banner ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_FACEBOOK_BANNER_METHODS_HELPURL = 'https://docs.kodular.io/components/monetization/facebook-banner ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_FACEBOOK_INTERSTITIAL_HELPURL = 'https://docs.kodular.io/components/monetization/facebook-interstitial ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_FACEBOOK_INTERSTITIAL_EVENTS_HELPURL = 'https://docs.kodular.io/components/monetization/facebook-interstitial ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_FACEBOOK_INTERSTITIAL_METHODS_HELPURL = 'https://docs.kodular.io/components/monetization/facebook-interstitial ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_IAB_HELPURL = 'https://docs.kodular.io/components/monetization/in-app-billing ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_IAB_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/monetization/in-app-billing ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_IAB_EVENTS_HELPURL = 'https://docs.kodular.io/components/monetization/in-app-billing ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_IAB_METHODS_HELPURL = 'https://docs.kodular.io/components/monetization/in-app-billing ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_LEADBOLT_HELPURL = 'https://docs.kodular.io/components/monetization/leadbolt ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_LEADBOLT_EVENTS_HELPURL = 'https://docs.kodular.io/components/monetization/leadbolt ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_LEADBOLT_METHODS_HELPURL = 'https://docs.kodular.io/components/monetization/leadbolt ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_WHITEMOBI_HELPURL = 'https://docs.kodular.io/components/monetization/whitemobi ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_WHITEMOBI_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/monetization/whitemobi ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_WHITEMOBI_EVENTS_HELPURL = 'https://docs.kodular.io/components/monetization/whitemobi ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_WHITEMOBI_METHODS_HELPURL = 'https://docs.kodular.io/components/monetization/whitemobi ';																								
																									
//Lego mindstorms components																									
	Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDRIVE_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-drive ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDRIVE_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-drive ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDRIVE_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-drive ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-color-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-color-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-color-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-color-sensor ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-light-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-light-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_EVENTS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-light-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-light-sensor ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-sound-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-sound-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_EVENTS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-sound-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-sound-sensor ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-touch-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-touch-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_EVENTS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-touch-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-touch-sensor ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-ultrasonic-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-ultrasonic-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_EVENTS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-ultrasonic-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-ultrasonic-sensor ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDIRECT_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-direct-commands';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDIRECT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-direct-commands';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDIRECT_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-direct-commands';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3MOTORS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-motors';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3MOTORS_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-motors';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3MOTORS_EVENTS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-motors';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3MOTORS_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-motors';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3COLORSENSOR_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-color-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3COLORSENSOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-color-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3COLORSENSOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-color-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3COLORSENSOR_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-color-sensor ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3GYROSENSOR_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-gyro-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3GYROSENSOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-gyro-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3GYROSENSOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-gyro-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3GYROSENSOR_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-gyro-sensor ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3TOUCHSENSOR_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-touch-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3TOUCHSENSOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-touch-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3TOUCHSENSOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-touch-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3TOUCHSENSOR_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-touch-sensor ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3ULTRASONIC_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-ultrasonic-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3ULTRASONIC_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-ultrasonic-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3ULTRASONIC_EVENTS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-ultrasonic-sensor ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3ULTRASONIC_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-ultrasonic-sensor ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3SOUND_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-sound ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3SOUND_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-sound ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3SOUND_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-sound ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3UI_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-ui ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3UI_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-ui ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3UI_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-ui ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3COMMANDS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-commands';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3COMMANDS_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-commands';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_EV3COMMANDS_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-commands';																								
																									
//Experimental components																									
	Blockly.Msg.LANG_COMPONENT_BLOCK_CHROME_CUSTOM_TABS_HELPURL = 'https://docs.kodular.io/components/experimental/chrome-custom-tabs';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CHROME_CUSTOM_TABS_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/experimental/chrome-custom-tabs';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CHROME_CUSTOM_TABS_METHODS_HELPURL = 'https://docs.kodular.io/components/experimental/chrome-custom-tabs';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_CLOUDDB_HELPURL = 'https://docs.kodular.io/components/experimental/cloud-db ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CLOUDDB_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/experimental/cloud-db ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CLOUDDB_EVENTS_HELPURL = 'https://docs.kodular.io/components/experimental/cloud-db ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_CLOUDDB_METHODS_HELPURL = 'https://docs.kodular.io/components/experimental/cloud-db ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFICATION_HELPURL = 'https://docs.kodular.io/components/experimental/notification ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFICATION_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/experimental/notification ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFICATION_METHODS_HELPURL = 'https://docs.kodular.io/components/experimental/notification ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_PUSH_NOTIFICATIONS_HELPURL = 'https://docs.kodular.io/components/experimental/push-notifications';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_PUSH_NOTIFICATIONS_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/experimental/push-notifications';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_PUSH_NOTIFICATIONS_METHODS_HELPURL = 'https://docs.kodular.io/components/experimental/push-notifications';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_SHELL_HELPURL = 'https://docs.kodular.io/components/experimental/shell ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SHELL_EVENTS_HELPURL = 'https://docs.kodular.io/components/experimental/shell ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SHELL_METHODS_HELPURL = 'https://docs.kodular.io/components/experimental/shell ';																								
																										
	Blockly.Msg.LANG_COMPONENT_BLOCK_SHORTCUT_BADGE_HELPURL = 'https://docs.kodular.io/components/experimental/shortcut-badge ';																								
	Blockly.Msg.LANG_COMPONENT_BLOCK_SHORTCUT_BADGE_METHODS_HELPURL = 'https://docs.kodular.io/components/experimental/shortcut-badge ';																								
																									
//Misc																									
	Blockly.Msg.SHOW_WARNINGS = 'Mostrar avisos';																								
	Blockly.Msg.HIDE_WARNINGS = 'Ocultar os avisos';																								
	Blockly.Msg.MISSING_SOCKETS_WARNINGS = 'Você deve preencher todos os soquetes com blocos';																								
	Blockly.Msg.WRONG_TYPE_BLOCK_WARINGS = 'Este bloco deve ser conectado a um bloco de evento ou uma definição de procedimento ';																								
	Blockly.Msg.ERROR_PROPERTY_SETTER_NEEDS_VALUE = 'Este bloco precisa de um bloco de valor ligado a seu soquete. ';																								
	Blockly.Msg.ERROR_GENERIC_NEEDS_COMPONENT = 'Você precisa fornecer um componente válido para este bloco %1 soquete.';																								
																									
// Messages from replmgr.js																									
	Blockly.Msg.REPL_ERROR_FROM_COMPANION = 'Erro De Companion ';																								
	Blockly.Msg.REPL_NETWORK_CONNECTION_ERROR = 'Erro de rede Connection ';																								
	Blockly.Msg.REPL_NETWORK_ERROR = 'Erro de rede';																								
	Blockly.Msg.REPL_NETWORK_ERROR_RESTART = 'Rede de erro na comunicação com Companion <br /> Tente reiniciar o companheiro e voltar a ligar. ';																								
	Blockly.Msg.REPL_OK = 'ESTÁ BEM';																								
	Blockly.Msg.REPL_COMPANION_VERSION_CHECK = 'Companion Versão Check ';																								
	Blockly.Msg.REPL_COMPANION_OUT_OF_DATE = 'Seu Companion App está desatualizado. Clique em "OK" para iniciar a atualização. Olhe o seu';																								
	Blockly.Msg.REPL_COMPANION_OUT_OF_DATE2 = 'Seu Companion App está desatualizado. Reinicie o Companion e usá-lo para digitalizar o QRCode abaixo a fim de update ';																								
	Blockly.Msg.REPL_EMULATORS = 'emulador';																								
	Blockly.Msg.REPL_DEVICES = 'Dispositivo';																								
	Blockly.Msg.REPL_APPROVE_UPDATE = 'tela, porque você será solicitado a aprovar a atualização. ';																								
	Blockly.Msg.REPL_NOT_NOW = 'Agora não';																								
	Blockly.Msg.REPL_COMPANION_OUT_OF_DATE1 = 'O companheiro que você está usando está desatualizado <br/> esta versão do Kodular deve ser usado com versão Companion.';																								
	Blockly.Msg.REPL_COMPANION_OUT_OF_DATE_IMMEDIATE = 'Você está usando um Companion out-of-date. Você deve atualizar o Companion Kodular o mais rápido possível. Se você tem a configuração de atualização automática na loja, a atualização vai acontecer por si só pouco tempo. ';																								
	Blockly.Msg.REPL_COMPANION_WRONG_PACKAGE = 'O companheiro que você está usando foi construído para diferentes instância de Kodular. Para obter a aparência companheiro correta na tela Kodular sob Ajuda-> menu Informações Companion.';																								
	Blockly.Msg.REPL_DISMISS = 'Dispensar';																								
	Blockly.Msg.REPL_SOFTWARE_UPDATE = 'Atualização de software';																								
	Blockly.Msg.REPL_OK_LOWER = 'Está bem';																								
	Blockly.Msg.REPL_GOT_IT = 'Entendi';																								
	Blockly.Msg.REPL_UPDATE_INFO = 'A atualização está agora a ser instalado no seu dispositivo. Preste atenção a sua tela do dispositivo (ou emulador) e aprovar a instalação do software quando solicitado <br /> <br />. IMPORTANTE: Quando a atualização terminar, escolha "Done" (não clique em 'Abrir'). Então vá para Kodular em seu navegador, clique no menu "Connect" e escolha "Connection reset". Em seguida, volte a ligar o dispositivo. ';																								
																										
	Blockly.Msg.REPL_UPDATE_NO_UPDATE = 'Sem atualização está disponível ';																								
	Blockly.Msg.REPL_UPDATE_NO_CONNECTION = 'Você deve estar conectado a um companheiro para atualizá-lo ';																								
	Blockly.Msg.REPL_UNABLE_TO_UPDATE = 'Não foi possível enviar atualização para o dispositivo / emulador ';																								
	Blockly.Msg.REPL_UNABLE_TO_LOAD = 'Não foi possível carregar atualização do servidor Kodular ';																								
	Blockly.Msg.REPL_UNABLE_TO_LOAD_NO_RESPOND = 'Não foi possível carregar atualização do servidor Kodular (servidor não responder) ';																								
	Blockly.Msg.REPL_NOW_DOWNLOADING = 'Estamos agora a fazer o download de atualização do Kodular Server, entre em modo de espera ';																								
	Blockly.Msg.REPL_RUNTIME_ERROR = 'Erro de tempo ';																								
	Blockly.Msg.REPL_NO_ERROR_FIVE_SECONDS = '<br/> <i> Nota:. </ i> & nbsp; Você não verá outro erro relatado por 5 segundos ';																								
	Blockly.Msg.REPL_CONNECTING_USB_CABLE = 'Conexão via cabo USB ';																								
	Blockly.Msg.REPL_STARTING_EMULATOR = 'Iniciando o emulador Android <br/> Por favor, aguarde: Isso pode demorar um minuto ou dois. ';																								
	Blockly.Msg.REPL_CONNECTING = 'Conectando ... ';																								
	Blockly.Msg.REPL_CANCEL = 'Cancelar';																								
	Blockly.Msg.REPL_GIVE_UP = 'Desistir';																								
	Blockly.Msg.REPL_KEEP_TRYING = 'Continue tentando';																								
	Blockly.Msg.REPL_CONNECTION_FAILURE1 = 'Falha na conexão';																								
	Blockly.Msg.REPL_NO_START_EMULATOR = 'Nós não pôde iniciar o Companion Kodular dentro do emulador ';																								
	Blockly.Msg.REPL_PLUGGED_IN_Q = 'Plugged In? ';																								
	Blockly.Msg.REPL_AI_NO_SEE_DEVICE = 'não Kodular não vê o dispositivo, verifique se o cabo está conectado e pilotos estão corretos. ';																								
	Blockly.Msg.REPL_HELPER_Q = 'Ajudante?';																								
	Blockly.Msg.REPL_HELPER_NOT_RUNNING = 'O auxiliar de arranque Kodular não parece estar a correr <br /> <a href="https://starter.kodular.io" target="_blank"> Necessidade de ajuda </a>? ';																								
	Blockly.Msg.REPL_USB_CONNECTED_WAIT = 'USB conectado, esperando ';																								
	Blockly.Msg.REPL_SECONDS_ENSURE_RUNNING = 'segundos para garantir que todos está sendo executado. ';																								
	Blockly.Msg.REPL_EMULATOR_STARTED = 'Emulador começou, esperando ';																								
	Blockly.Msg.REPL_STARTING_COMPANION_ON_PHONE = 'Iniciando o Companion App no ​​telefone conectado. ';																								
	Blockly.Msg.REPL_STARTING_COMPANION_IN_EMULATOR = 'Iniciando o Companion App no ​​emulador. ';																								
	Blockly.Msg.REPL_COMPANION_STARTED_WAITING = 'partida companheiro, esperando ';																								
	Blockly.Msg.REPL_VERIFYING_COMPANION = 'Verificando que o Companion Iniciado .... ';																								
	Blockly.Msg.REPL_CONNECT_TO_COMPANION = 'Ligue para Companion ';																								
	Blockly.Msg.REPL_TRY_AGAIN1 = 'Falha na conexão com o Companion Kodular, tente novamente. ';																								
	Blockly.Msg.REPL_YOUR_CODE_IS = 'Seu código é';																								
	Blockly.Msg.REPL_DO_YOU_REALLY_Q = 'Você realmente?';																								
	Blockly.Msg.REPL_FACTORY_RESET = 'Este tentará redefinir sua Emulator para seu estado "de fábrica". Se você tivesse sido atualizado anteriormente o Companion instalado no emulador, você provavelmente vai ter que fazer isso novamente. ';																								
	Blockly.Msg.REPL_WEBRTC_CONNECTION_ERROR = 'Companion Erro de conexão ';																								
	Blockly.Msg.REPL_WEBRTC_CONNECTION_CLOSED = 'A Companion foi desligado ';																								
	Blockly.Msg.REPL_EMULATOR_ONLY = 'Você só pode usar esta opção para atualizar o emulador ';																								
																									
// Messages from Blockly.js																									
	Blockly.Msg.WARNING_DELETE_X_BLOCKS = 'Tem certeza de que deseja excluir todos os %1 desses blocos? ';																								
																									
// Blocklyeditor.js																									
	Blockly.Msg.GENERATE_YAIL = 'Gerar Yail ';																								
	Blockly.Msg.DO_IT = 'Faça';																								
	Blockly.Msg.DO_IT_DISCONNECTED = 'Fazê-lo (Companion não ligado) ';																								
	Blockly.Msg.CLEAR_DO_IT_ERROR = 'Limpar Error ';																								
	Blockly.Msg.CAN_NOT_DO_IT = 'Não posso fazer isso';																								
	Blockly.Msg.CONNECT_TO_DO_IT = 'Você deve estar conectado para o companheiro ou emulador para uso "Do It" ';																								
																									
// Clock Component Menu Items																									
	Blockly.Msg.TIME_YEARS = 'Anos';																								
	Blockly.Msg.TIME_MONTHS = 'Meses';																								
	Blockly.Msg.TIME_WEEKS = 'Semanas';																								
	Blockly.Msg.TIME_DAYS = 'Dias';
	Blockly.Msg.TIME_HOURS = 'Horas';																								
	Blockly.Msg.TIME_MINUTES = 'Minutos';																								
	Blockly.Msg.TIME_SECONDS = 'Segundos';																								
	Blockly.Msg.TIME_DURATION = 'Duração';																								
																									
// Connection Dialog Messages																									
	Blockly.Msg.DIALOG_RENDEZVOUS_NEGOTIATING = '15 Rendezvous (espera por favor) ';																								
	Blockly.Msg.DIALOG_SECURE_ESTABLISHING = '20 Estabelecer conexão segura ';																								
	Blockly.Msg.DIALOG_SECURE_ESTABLISHED = '30 Conexão Segura Fundada ';																								
	Blockly.Msg.DIALOG_FOUND_COMPANION = '10 Encontrado Companion ';																								
																									
//Blockly.Util.Dialog Messages																									
	Blockly.Msg.DIALOG_UNBOUND_VAR = 'Variáveis ​​Unbound';																								
	Blockly.Msg.DIALOG_SUBMIT = 'Enviar';																								
	Blockly.Msg.DIALOG_ENTER_VALUES = 'Digite valores para: ';																								
  }																									
};																									
																									
// Initalize language definition to Portuguese
Blockly.Msg.pt.br.switch_blockly_language_to_pt_br.init();
Blockly.Msg.pt.br.switch_language_to_portuguese_br.init();																						
