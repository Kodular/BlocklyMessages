// -*- mode: java; c-basic-offset: 2; -*-
// Copyright © 2018 Kodular. All rights reserved.

/**
 * Visual Blocks Language
 *
 * Copyright © 2018 Kodular. All rights reserved.
 */

/**
 * @fileoverview Turkish strings.
 */
'use strict';

goog.provide('AI.Blockly.Msg.tr');

goog.require('Blockly.Msg.tr');

/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

Blockly.Msg.tr.switch_language_to_turkish = {
  // Switch language to Turkish.
  category: '',
  helpUrl: '',
  init: function() {
// Context menus.
    Blockly.Msg.UNDO = 'Geri Al';
    Blockly.Msg.REDO = 'İleri Al';
    Blockly.Msg.CLEAN_UP = 'Blokları Temizle';
    Blockly.Msg.DUPLICATE_BLOCK = 'Çoğalt';
    Blockly.Msg.REMOVE_COMMENT = 'Yorumu Kaldır';
    Blockly.Msg.ADD_COMMENT = 'Yorum Ekle';
    Blockly.Msg.EXTERNAL_INPUTS = 'Dış Girişler';
    Blockly.Msg.INLINE_INPUTS = 'İç Girişler';
    Blockly.Msg.HORIZONTAL_PARAMETERS = 'Parametreleri Yatay Diz';
    Blockly.Msg.VERTICAL_PARAMETERS = 'Parametreleri Dikey Diz';
    Blockly.Msg.CONFIRM_DELETE = 'Silmeyi Onayla';
    Blockly.Msg.DELETE_ALL_BLOCKS = "%1 bloğu silmek istiyor musunuz?";
    Blockly.Msg.DELETE_BLOCK = 'Bloğu Sil';
    Blockly.Msg.DELETE_X_BLOCKS = '%1 Bloğu Sil';
    Blockly.Msg.COLLAPSE_BLOCK = 'Bloğu Küçült';
    Blockly.Msg.EXPAND_BLOCK = 'Bloğu Genişlet';
    Blockly.Msg.DISABLE_BLOCK = 'Bloğu Devre Dışı Bırak';
    Blockly.Msg.ENABLE_BLOCK = 'Bloğu Etkinleştir';
    Blockly.Msg.HELP = 'Yardım';
    Blockly.Msg.EXPORT_IMAGE = 'Blokları Resim Olarak İndir';
    Blockly.Msg.COLLAPSE_ALL = 'Blokların Hepsini Küçült';
    Blockly.Msg.EXPAND_ALL = 'Blokların Hepsini Genişlet';
    Blockly.Msg.ARRANGE_H = 'Blokları Yatay Diz';
    Blockly.Msg.ARRANGE_V = 'Blokları Dikey Diz';
    Blockly.Msg.ARRANGE_S = 'Blokları Çapraz Diz';
    Blockly.Msg.SORT_W = 'Blokları Genişliklerine Göre Sırala';
    Blockly.Msg.SORT_H = 'Blokları Yüksekliklerine Göre Sırala';
    Blockly.Msg.SORT_C = 'Blokları Kategorilerine Göre Sırala';
    Blockly.Msg.COPY_TO_BACKPACK = 'Sırt Çantasına Ekle';
    Blockly.Msg.COPY_ALLBLOCKS = 'Tüm Blokları Sırt Çantasına Ekle';
    Blockly.Msg.BACKPACK_GET = 'Tüm Blokları Sırt Çantasından Al';
    Blockly.Msg.BACKPACK_EMPTY = 'Sırt Çantasını Temizle';
    Blockly.Msg.BACKPACK_CONFIRM_EMPTY = 'Sırt çantasını temizlemek istediğinizden emin misiniz?';
    Blockly.Msg.BACKPACK_DOC_TITLE = "Sırt Çantası Bilgisi";
    Blockly.Msg.SHOW_BACKPACK_DOCUMENTATION = "Sırt Çantası Dökümantasyonunu Göster";
    Blockly.Msg.BACKPACK_DOCUMENTATION = "Sırt Çantası bir kopyala/yapıştır özelliğidir. Bir projeden veya ekrandan blokları kopyalayıp " +
   " başka bir projeye ya da ekrana kopyalamanızı sağlar. " +
   " Kopyalamak için, blokları Sırt Çantasına sürükleyip bırakın. Yapıştırmak için, Sırt Çantası simgesine tıklayın ve " +
   " blokları çalışma alına sürükleyin." +
   "</p><p>Eğer sırt çantanızda bloklar var iken Kodular'dan ayrılırsanız, " +
   " bir sonraki girişinizde onları tekrar görebilirsiniz." +
   "</p><p>Daha ayrıntılı bir dökümantasyon ve rehber videosu için:" +
   '</p><p><a href="https://docs.kodular.io/other/backpack.html" target="_blank">https://docs.kodular.io/other/backpack.html</a>';
    Blockly.Msg.ENABLE_GRID = 'Çalışma Alanı Kılavuzunu Aktifleştir';
    Blockly.Msg.DISABLE_GRID = 'Çalışma Alanı Kılavuzunu Devre Dışı Bırak';
    Blockly.Msg.ENABLE_SNAPPING = 'Kılavuza Tutturmayı Etkinleştir';
    Blockly.Msg.DISABLE_SNAPPING = 'Kılavuza Tutturmayı Devre Dışı Bırak';

// Variable renaming.
    Blockly.Msg.CHANGE_VALUE_TITLE = 'Değeri değiştir:';
    Blockly.Msg.NEW_VARIABLE = 'Yeni değişken...';
    Blockly.Msg.NEW_VARIABLE_TITLE = 'Yeni değişken adı:';
    Blockly.Msg.RENAME_VARIABLE = 'Değişkenin adını değiştir...';
    Blockly.Msg.RENAME_VARIABLE_TITLE = 'Tüm "%1" değişkenlerin adını şununla değiştir:';

// Toolbox.
    Blockly.Msg.VARIABLE_CATEGORY = 'Değişkenler';
    Blockly.Msg.PROCEDURE_CATEGORY = 'Prosedürler';

// Warnings/Errors
    Blockly.Msg.ERROR_BLOCK_CANNOT_BE_IN_DEFINTION = "Bu blok bir tanımda olamaz";
    Blockly.Msg.ERROR_SELECT_VALID_ITEM_FROM_DROPDOWN = "Lütfen açılır menüden geçerli bir öğe seçin.";
    Blockly.Msg.ERROR_DUPLICATE_EVENT_HANDLER = "Bu bileşen için bu olaydan birden fazla var.";
    Blockly.Msg.ERROR_COMPONENT_DOES_NOT_EXIST = "Bileşen mevcut değil";
    Blockly.Msg.ERROR_BLOCK_IS_NOT_DEFINED = "Bu blok tanımlı değil. Bu bloğu silin!";

// Colour Blocks.
    Blockly.Msg.LANG_COLOUR_PICKER_HELPURL = 'https://docs.kodular.io/blocks/colors#basic';
    Blockly.Msg.LANG_COLOUR_PICKER_TOOLTIP = 'Renk seçmek için kutuya tıklayın.';
    Blockly.Msg.LANG_COLOUR_WHITE = 'beyaz';
    Blockly.Msg.LANG_COLOUR_LIGHT_GRAY = 'açık gri';
    Blockly.Msg.LANG_COLOUR_GRAY = 'gri';
    Blockly.Msg.LANG_COLOUR_BLUE_GRAY = 'mavi gri';
    Blockly.Msg.LANG_COLOUR_DARK_GRAY = 'koyu gri';
    Blockly.Msg.LANG_COLOUR_BLACK = 'siyah';
    Blockly.Msg.LANG_COLOUR_RED = 'kırmızı';
    Blockly.Msg.LANG_COLOUR_PINK = 'pembe';
    Blockly.Msg.LANG_COLOUR_PURPLE = 'mor';
    Blockly.Msg.LANG_COLOUR_DEEP_PURPLE = 'koyu mor';
    Blockly.Msg.LANG_COLOUR_INDIGO = 'indigo';
    Blockly.Msg.LANG_COLOUR_BLUE = 'mavi';
    Blockly.Msg.LANG_COLOUR_LIGHT_BLUE = 'açık mavi';
    Blockly.Msg.LANG_COLOUR_CYAN = 'camgöbeği';
    Blockly.Msg.LANG_COLOUR_TEAL = 'çamurcun';
    Blockly.Msg.LANG_COLOUR_GREEN = 'yeşil';
    Blockly.Msg.LANG_COLOUR_LIGHT_GREEN = 'açık yeşil';
    Blockly.Msg.LANG_COLOUR_LIME = 'limon';
    Blockly.Msg.LANG_COLOUR_YELLOW = 'sarı';
    Blockly.Msg.LANG_COLOUR_AMBER = 'amber';
    Blockly.Msg.LANG_COLOUR_ORANGE = 'turuncu';
    Blockly.Msg.LANG_COLOUR_DEEP_ORANGE = 'koyu turuncu';
    Blockly.Msg.LANG_COLOUR_BROWN = 'kahverengi';
    Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR = 'rengi ayır';
    Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR_HELPURL = 'https://docs.kodular.io/blocks/colors#split';
    Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR_TOOLTIP = "Dört elemandan oluşan bir liste, her biri 0 ile 255 arasında, kırmızı, yeşil, mavi ve alfa bileşenlerini temsil eder.";
    Blockly.Msg.LANG_COLOUR_MAKE_COLOUR = 'renk oluştur';
    Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_HELPURL = 'https://docs.kodular.io/blocks/colors#make';
    Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_TOOLTIP = "Kırmızı, yeşil, mavi ve opsiyonel olarak afta bileşenleri ile verilen bir renk";

// Control Blocks
    Blockly.Msg.LANG_CATEGORY_CONTROLS = 'Kontrol';
    Blockly.Msg.LANG_CONTROLS_IF_HELPURL = 'https://docs.kodular.io/blocks/control#if';
    Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_1 = 'Eğer değer doğru ise, o zaman bir takım ifadeler yap.';
    Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_2 = 'Eğer değer doğru ise, o zaman ilk kısımdaki ifadeleri yap.\n' +
        'Aksi takdirde, ikinci kısımdaki ifadeleri yap.';
    Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_3 = 'Eğer ilk değer doğru ise, ilk kısımdaki ifadeleri yap.\n' +
        'Aksi takdirde, ikinci değer doğru ise, o zaman ikinci kısımdaki ifadeleri yap.';
    Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_4 = 'Eğer ilk değer doğru ise, ilk kısımdaki ifadeleri yap.\n' +
        'Aksi takdirde, ikinci değer doğru ise, o zaman ikinci kısımdaki ifadeleri yap.\n' +
        'Eğer iki değer de doğru değilse, son kısımdaki ifadeleri yap.';
    Blockly.Msg.LANG_CONTROLS_IF_MSG_IF = 'eğer';
    Blockly.Msg.LANG_CONTROLS_IF_MSG_ELSEIF = 'değilse eğer';
    Blockly.Msg.LANG_CONTROLS_IF_MSG_ELSE = 'değilse';
    Blockly.Msg.LANG_CONTROLS_IF_MSG_THEN = 'o zaman';

    Blockly.Msg.LANG_CONTROLS_IF_IF_TITLE_IF = 'eğer';
    Blockly.Msg.LANG_CONTROLS_IF_IF_TOOLTIP = 'Bu eğer bloğunu yeniden düzenlemek için\n' +
        'kısımların yerlerini değiştirin, ekleyin veya kaldırın.';

    Blockly.Msg.LANG_CONTROLS_IF_ELSEIF_TITLE_ELSEIF = 'değilse eğer';
    Blockly.Msg.LANG_CONTROLS_IF_ELSEIF_TOOLTIP = 'Eğer bloğuna yeni bir koşul ekle.';

    Blockly.Msg.LANG_CONTROLS_IF_ELSE_TITLE_ELSE = 'değilse';
    Blockly.Msg.LANG_CONTROLS_IF_ELSE_TOOLTIP = 'Eğer bloğuna tüm koşulları yakalayan bir son ekle.';

    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_HELPURL = 'https://docs.kodular.io/blocks/control#while';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TITLE_REPEAT = 'tekrarla';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_INPUT_DO = 'yap';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE = 'iken';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = 'kadar';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = 'Bir değer doğru olduğu sürece bir takım ifadeler uygula.';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = 'Bir değer yanlış olduğu sürece bir takım ifadeler uygula.';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_1 = 'Test kısmı doğru olduğu sürece \'yap\' kısmındaki olayları '
        + 'yap.';

    Blockly.Msg.LANG_CONTROLS_FOR_HELPURL = '';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_WITH = 'şununla say';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_VAR = 'x';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_FROM = 'buradan';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_TO = 'şuraya';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_DO = 'yap';

    Blockly.Msg.LANG_CONTROLS_FOR_TOOLTIP = 'Bir başlangıç sayısından bir bitiş sayısında kadar say.\n' +
        'Her sayımda, "%1" adlı değişkene şu anki sayıyı ata.\n' +
        'Ve sonra bir takım ifadeler yap.';

    Blockly.Msg.LANG_CONTROLS_FORRANGE_HELPURL = 'https://docs.kodular.io/blocks/control#forrange';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_ITEM = 'her';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_VAR = 'sayı';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_START = 'için buradan';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_END = 'şuraya kadar';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_STEP = 'şu kadar ilerleyerek';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_DO = 'yap';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_TEXT = 'aralıktaki her sayı için';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_PREFIX = 'her ';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_SUFFIX = ' şu aralıktaki';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_TOOLTIP = 'Başlangıç ve bitiş aralığındakı her sayı boyunca '
        + '\'yap\' kısmındaki ifadeleri yap. Verilen değişken adını kullanarak '
        + 'şu anki değeri al.';

    Blockly.Msg.LANG_CONTROLS_FOREACH_HELPURL = 'https://docs.kodular.io/blocks/control#foreach';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_ITEM = 'her';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_VAR = 'öğe';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_INLIST = 'için bu listeden';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_DO = 'yap';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_TEXT = 'listedeki her öğe için';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_PREFIX = 'her ';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_SUFFIX = ' bu listedeki';
    Blockly.Msg.LANG_CONTROLS_FOREACH_TOOLTIP = 'Listedeki her öğe için \'yap\' kısmındaki ifadeleri yap.'
        + 'Verilen değişken adını kullanarak şu anki liste öğesini al.';

    Blockly.Msg.LANG_CONTROLS_GET_HELPURL = 'https://docs.kodular.io/blocks/control#get';


    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_HELPURL = 'http://en.wikipedia.org/wiki/Control_flow';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP = 'şu döngüyü';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = 'kır';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = 'sonraki yinelemeye devam et';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = 'Bulunduğu döngüyü kırıp iptal eder.';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = 'Döngünün devamını atla, ve\n' +
        'sonraki yinelemeye devam et.';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_WARNING = 'Uyarı:\n' +
        'Bu blok sadece bir dönügünün\n' +
        'içinde iken kullanılabilir.';

    Blockly.Msg.LANG_CONTROLS_WHILE_HELPURL = 'https://docs.kodular.io/blocks/control#while';;
    Blockly.Msg.LANG_CONTROLS_WHILE_TITLE = 'iken';
    Blockly.Msg.LANG_CONTROLS_WHILE_INPUT_TEST = 'test';
    Blockly.Msg.LANG_CONTROLS_WHILE_INPUT_DO = 'yap';
    Blockly.Msg.LANG_CONTROLS_WHILE_COLLAPSED_TEXT = 'iken';
    Blockly.Msg.LANG_CONTROLS_WHILE_TOOLTIP = 'Test kısmı doğru olduğu sürece'
        + '\'yap\' kısmındaki ifadeleri yap.';

    Blockly.Msg.LANG_CONTROLS_CHOOSE_HELPURL = 'https://docs.kodular.io/blocks/control#choose';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_TITLE = 'eğer'
    Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_TEST = '';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_THEN_RETURN = 'o zaman';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_ELSE_RETURN = 'değilse';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_COLLAPSED_TEXT = 'eğer';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_TOOLTIP = 'Eğer koşul doğru ise, '
        + '\'o zaman - döndür\' slotundaki ifadenin verdiği geri dönüş değerini gönderir;'
        + 'aksi takdirde \'o zaman - döndür\' slotundaki ifadenin verdiği geri dönüş değerini gönderir;'
        + 'en fazla dönüş yuvası ifadelerinden biri değerlendirilecektir.';

    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_HELPURL = 'https://docs.kodular.io/blocks/control#doreturn';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_INPUT_DO = 'yap';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_INPUT_RETURN = 'sonuç';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_TOOLTIP = '\'yap\' kısmındaki ifadeleri yapar ve geri değer gönderir. Eğer değişkene değer atamadan önce bir prosedür çalıştırmak istiyorsanız kullanışlıdır.';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_COLLAPSED_TEXT = 'yap/sonuç';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_TITLE = 'yap sonuç';

    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_TITLE = 'çalıştır ama sonucu yoksay'
    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_HELPURL = 'https://docs.kodular.io/blocks/control#evaluate';
    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_COLLAPSED_TEXT = 'çalıştır ama yoksay'
    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_TOOLTIP = 'Kendisine bağlı bloğu çalıştırır ve geri dönüş değerini görmezden gelir. (eğer varsa) Eğer prosedürü çalıştırmanız lazımsa ve geri dönüş değerine ihtiyacınız yoksa kullanışlıdır.';

    /* [lyn, 10/14/13] Removed for now. May come back some day.
     Blockly.Msg.LANG_CONTROLS_NOTHING_TITLE = 'hiçbir şey';
     Blockly.Msg.LANG_CONTROLS_NOTHING_HELPURL = 'https://docs.kodular.io/blocks/control#nothing';
     Blockly.Msg.LANG_CONTROLS_NOTHING_TOOLTIP = 'Hiçbir şey döndürür. Değerlere açılış değeri vermek için veya geri gönüş değeri olmayan soketler için kullanılır. Bu null ya da boş ifadesinin bir karşılığıdır.';
     */

    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_HELPURL = 'https://docs.kodular.io/blocks/control#openscreen';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_TITLE = 'başka bir ekran aç';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_INPUT_SCREENNAME = 'ekran Adı';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_COLLAPSED_TEXT = 'ekran aç';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_TOOLTIP = 'Çoklu ekran uygulamasında yeni bir ekran açar.';

    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_HELPURL = 'https://docs.kodular.io/blocks/control#openscreenwithvalue';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_TITLE = 'başlangıç değeriyle başka bir ekran aç';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_INPUT_SCREENNAME = 'ekran Adı';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_INPUT_STARTVALUE = 'ekran Değeri';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_COLLAPSED_TEXT = 'değer ile ekran aç'
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_TOOLTIP = 'Çoklu ekran uygulamasında yeni bir ekran açar ve '
        + 'o ekrana başlangıç değeri verir.';

    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_HELPURL = 'https://docs.kodular.io/blocks/control#getstartvalue';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_TITLE = 'başlangıç değerini al';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_INPUT_SCREENNAME = 'ekran Adı';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_INPUT_STARTVALUE = 'başlangıç Değeri';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_COLLAPSED_TEXT = 'başlangıç değerini al';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_TOOLTIP = 'Bu ekran açıldığında bu ekrana verilen değeri döndürür. '
        + 'Tipik olarak çoklu-ekran uygulaması tarafından. Eğer hiç değer yollanmamış ise '
        + 'boş metin döndürür.';

    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_HELPURL = 'https://docs.kodular.io/blocks/control#closescreen';;
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_TITLE = 'ekranı kapat';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_COLLAPSED_TEXT = 'ekranı kapat';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_TOOLTIP = 'Şu anki ekranı kapatır.';

    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_HELPURL = 'https://docs.kodular.io/blocks/control#closescreenwithvalue';;
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_TITLE = 'değer ile ekranı kapat';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_INPUT_RESULT = 'sonuç';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_COLLAPSED_TEXT = 'değer ile ekranı kapat';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_TOOLTIP = 'Bu ekranı kapatır ve bu ekranı kapatan ekrana '
        + 'bir değer döndürür.';

    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_HELPURL = 'https://docs.kodular.io/blocks/control#closeapp';;
    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_TITLE = 'uygulamayı kapat';
    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_COLLAPSED_TEXT = 'uygulamayı kapat';
    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_TOOLTIP = 'Uygulamadaki tüm ekranları kapatır ve uygulamayı durdurur.';

    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_HELPURL = 'https://docs.kodular.io/blocks/control#getplainstarttext';
    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_TITLE = 'düz başlangıç metnini al';
    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_COLLAPSED_TEXT = 'düz başlangıç metnini al';
    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_TOOLTIP = 'Başka bir uygulama tarafından bu ekrana gönderilmiş düz metni döndürür. '
        + 'Eğer hiç değer atılmamışsa, boş bir metin dönüdür. Çoklu-ekranlı uygulamalar '
        + 'için, bu blok yerine başlagıç metnini al bloğunu kullanın.';

    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_HELPURL = 'https://docs.kodular.io/blocks/control#closescreenwithplaintext';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_TITLE = 'düz metin ile ekranı kapat';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_INPUT_TEXT = 'metin';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_COLLAPSED_TEXT = 'düz metin ile ekranı kapat';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_TOOLTIP = 'Mevcut ekranı kapatır ve bu ekranın açtığı uygulamaya metin döndürür. '
        + '   Bu komut Kodular olmayan aktivitelere metin döndürmek içindir, Kodular ekranlarına değil. '
        + 'Kodular ekranları için, yani çoklu-ekranlı uygulamalar için bu blok yerine değer ile ekranı kapat bloğunu kullanın.';

// Logic Blocks.
    Blockly.Msg.LANG_CATEGORY_LOGIC = 'Mantık';
    Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL = 'http://en.wikipedia.org/wiki/Inequality_(mathematics)';
    Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL_EQ = 'https://docs.kodular.io/blocks/logic#=';
    Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL_NEQ = 'https://docs.kodular.io/blocks/logic#not=';
    Blockly.Msg.LANG_LOGIC_COMPARE_TOOLTIP_EQ = 'İki şeyin eşit olup olmadığını kontrol eder. \n' +
        'Bu şeyler herhangi bir şey olabilir, sadece sayılar değil. \n' +
        'Sayılar, metinlerin yazdırılmış hali olarak kabul edilir, \n' +
        'mesela, 0 sayısı yazı olarak sıfıra \"0\" eşittir.  Ayrıca, iki metnin \n' +
        'içerdiği sayılar birbirine eşitte onlar da eşittir, örnek \n' +
        '\"1\", \"01\" ile eşittir.';
    Blockly.Msg.LANG_LOGIC_COMPARE_TOOLTIP_NEQ = 'Eğer iki giriş de birbirine eşit değil ise doğru döndürür.';
    Blockly.Msg.LANG_LOGIC_COMPARE_TRANSLATED_NAME = 'eşittir mantığı';
    Blockly.Msg.LANG_LOGIC_COMPARE_EQ = '=';
    Blockly.Msg.LANG_LOGIC_COMPARE_NEQ = '\u2260';

    Blockly.Msg.LANG_LOGIC_OPERATION_HELPURL_AND = 'https://docs.kodular.io/blocks/logic#and';
    Blockly.Msg.LANG_LOGIC_OPERATION_HELPURL_OR = 'https://docs.kodular.io/blocks/logic#or';
    Blockly.Msg.LANG_LOGIC_OPERATION_AND = 've';
    Blockly.Msg.LANG_LOGIC_OPERATION_OR = 'veya';
    Blockly.Msg.LANG_LOGIC_OPERATION_TOOLTIP_AND = 'Eğer tüm girişler doğru ise doğru döndürür.';
    Blockly.Msg.LANG_LOGIC_OPERATION_TOOLTIP_OR = 'Eğer herhangi bir giriş doğru ise doğru döndürür.';

    Blockly.Msg.LANG_LOGIC_NEGATE_HELPURL = 'https://docs.kodular.io/blocks/logic#not';
    Blockly.Msg.LANG_LOGIC_NEGATE_INPUT_NOT = 'değil';
    Blockly.Msg.LANG_LOGIC_NEGATE_TOOLTIP = 'Giriş yanlış ise doğru döndürür.\n' +
        'Giriş doğru ise yanlış döndürür.';

    Blockly.Msg.LANG_LOGIC_BOOLEAN_TRUE_HELPURL = 'https://docs.kodular.io/blocks/logic#true';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_FALSE_HELPURL = 'https://docs.kodular.io/blocks/logic#false';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_TRUE = 'doğru (true)';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_FALSE = 'yanlış (false)';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_TOOLTIP_TRUE = 'Boolean tipinde true yani doğru değerini döndürür.';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_TOOLTIP_FALSE = 'Boolean tipinde false yani yanlış değerini döndürür.';

// Math Blocks.
    Blockly.Msg.LANG_CATEGORY_MATH = 'Matematik';
    Blockly.Msg.LANG_MATH_NUMBER_HELPURL = 'https://docs.kodular.io/blocks/math#number';
    Blockly.Msg.LANG_MATH_NUMBER_TOOLTIP = 'Gösterilen sayıyı döndürür.';
    Blockly.Msg.LANG_MATH_MUTATOR_ITEM_INPUT_NUMBER = 'sayı';

    Blockly.Msg.LANG_MATH_COMPARE_HELPURL = '';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_EQ = 'https://docs.kodular.io/blocks/math#=';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_NEQ = 'https://docs.kodular.io/blocks/math#not=';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_LT = 'https://docs.kodular.io/blocks/math#lt';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_LTE = 'https://docs.kodular.io/blocks/math#lte';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_GT = 'https://docs.kodular.io/blocks/math#gt';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_GTE = 'https://docs.kodular.io/blocks/math#gte';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_EQ = 'Eğer iki sayı birbirine eşit ise doğru döndürür.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_NEQ = 'Eğer iki sayı birbirine eşit değil ise doğru döndürür.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_LT = 'Eğer ilk sayı ikinci sayıdan küçük ise\n' +
        'doğru döndürür.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_LTE = 'Eğer ilk sayı ikinci sayıdan küçük veya eşit ise\n' +
        'doğru döndürür.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_GT = 'Eğer ilk sayı ikinci sayıdan büyük ise\n' +
        'doğru döndürür.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_GTE = 'Eğer ilk sayı ikinci sayıdan büyük veya eşit ise\n' +
        'doğru döndürür.';
    Blockly.Msg.LANG_MATH_COMPARE_EQ = '=';
    Blockly.Msg.LANG_MATH_COMPARE_NEQ = '\u2260';
    Blockly.Msg.LANG_MATH_COMPARE_LT = '<';
    Blockly.Msg.LANG_MATH_COMPARE_LTE = '\u2264';
    Blockly.Msg.LANG_MATH_COMPARE_GT = '>';
    Blockly.Msg.LANG_MATH_COMPARE_GTE = '\u2265';

    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_ADD = 'https://docs.kodular.io/blocks/math#add';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_MINUS = 'https://docs.kodular.io/blocks/math#subtract';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_MULTIPLY = 'https://docs.kodular.io/blocks/math#multiply';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_DIVIDE = 'https://docs.kodular.io/blocks/math#divide';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_POWER = 'https://docs.kodular.io/blocks/math#exponent';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_ADD = 'İki sayının toplamını döndürür.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_MINUS = 'İki sayının farkını döndürür.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_MULTIPLY = 'İki sayının çarpımını döndürür.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_DIVIDE = 'İki sayının bölümünü döndürür.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_POWER = 'İkinci sayıyı birinci sayının kuvveti olarak hesaplar ve sonucu döndürür.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_ADD = '+';
    Blockly.Msg.LANG_MATH_ARITHMETIC_MINUS = '-';
    Blockly.Msg.LANG_MATH_ARITHMETIC_MULTIPLY = '*';
    Blockly.Msg.LANG_MATH_ARITHMETIC_DIVIDE = '/';
    Blockly.Msg.LANG_MATH_ARITHMETIC_POWER = '^';

    /*Blockly.Msg.LANG_MATH_CHANGE_TITLE_CHANGE = 'değiştir';
     Blockly.Msg.LANG_MATH_CHANGE_TITLE_ITEM = 'öğe';
     Blockly.Msg.LANG_MATH_CHANGE_INPUT_BY = 'şu kadar';
     Blockly.Msg.LANG_MATH_CHANGE_TOOLTIP = '"%1" adlı değişkene bir sayı ekle.';*/


    Blockly.Msg.LANG_MATH_SINGLE_OP_ROOT = 'karekök';
    Blockly.Msg.LANG_MATH_SINGLE_OP_ABSOLUTE = 'mutlak';
    Blockly.Msg.LANG_MATH_SINGLE_OP_NEG = 'negatif';
    Blockly.Msg.LANG_MATH_SINGLE_OP_LN = 'log';
    Blockly.Msg.LANG_MATH_SINGLE_OP_EXP = 'e^';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_ROOT = 'Sayının karekökünü döndürür.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_ROOT = 'https://docs.kodular.io/blocks/math#sqrt';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_ABS = 'Sayının mutlak değerini döndürür.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_ABS = 'https://docs.kodular.io/blocks/math#abs';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_NEG = 'Sayının negatifini döndürür.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_NEG = 'https://docs.kodular.io/blocks/math#neg';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_LN = 'Sayının doğal logaritmasını döndür, örnek olarak e (2.71828...) tabanından logaritma';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_LN ='https://docs.kodular.io/blocks/math#log';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_EXP = 'E (2.71828...) sayısının belirtilen kuvvetini döndürür.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_EXP ='https://docs.kodular.io/blocks/math#e';
    /*Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_POW10 = '10 sayısının belirtilen kuvvetini döndürür.';*/

    Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_ROUND = 'Bir sayıyı yukarıya ya da aşağı yuvarla.';
    Blockly.Msg.LANG_MATH_ROUND_HELPURL_ROUND = 'https://docs.kodular.io/blocks/math#round';
    Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_CEILING = 'Girilen değeri, kendisinden küçük olmamak şartıyla\n' +
        'en küçük sayıya yuvarlar.';
    Blockly.Msg.LANG_MATH_ROUND_HELPURL_CEILING =  'https://docs.kodular.io/blocks/math#ceiling';
    Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_FLOOR = 'Girilen değeri, kendisinden büyük olmamak şartıyla\n' +
        'en büyük sayıya yuvarlar.';
    Blockly.Msg.LANG_MATH_ROUND_HELPURL_FLOOR =  'https://docs.kodular.io/blocks/math#floor';
    Blockly.Msg.LANG_MATH_ROUND_OPERATOR_ROUND = 'yuvarla';
    Blockly.Msg.LANG_MATH_ROUND_OPERATOR_CEILING = 'tavan';
    Blockly.Msg.LANG_MATH_ROUND_OPERATOR_FLOOR = 'taban';

    Blockly.Msg.LANG_MATH_TRIG_SIN = 'sin';
    Blockly.Msg.LANG_MATH_TRIG_COS = 'cos';
    Blockly.Msg.LANG_MATH_TRIG_TAN = 'tan';
    Blockly.Msg.LANG_MATH_TRIG_ASIN = 'asin';
    Blockly.Msg.LANG_MATH_TRIG_ACOS = 'acos';
    Blockly.Msg.LANG_MATH_TRIG_ATAN = 'atan';
    Blockly.Msg.LANG_MATH_TRIG_ATAN2 = 'atan2';
    Blockly.Msg.LANG_MATH_TRIG_ATAN2_X = 'x';
    Blockly.Msg.LANG_MATH_TRIG_ATAN2_Y = 'y';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_SIN = 'Verilen açı derecesinin sinüsünü hesaplar.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_SIN = 'https://docs.kodular.io/blocks/math#sin';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_COS = 'Verilen açı derecesinin kosinüsünü hesaplar.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_COS = 'https://docs.kodular.io/blocks/math#cos';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_TAN = 'Verilen açı derecesinin tanjantını hesaplar.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_TAN = 'https://docs.kodular.io/blocks/math#tan';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ASIN = 'Verilen sinüs değerinin (-90,+90]\n' +
        'aralığındaki açı derecesini verir.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_ASIN = 'https://docs.kodular.io/blocks/math#asin';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ACOS = 'Verilen kosinüs değerinin [0, 180)\n' +
        'aralığındaki açı derecesini verir.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_ACOS = 'https://docs.kodular.io/blocks/math#acos';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ATAN = 'Verilen tanjant değerinin (-90, +90)\n' +
        'aralığındaki açı derecesini verir.';
    ATAN : Blockly.Msg.LANG_MATH_TRIG_HELPURL_ATAN = 'https://docs.kodular.io/blocks/math#atan';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ATAN2 = 'Verilen dikdörtgen koordinat değerlerinin (-180, +180]\n' +
        'aralığındaki açı derecesini verir.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_ATAN2 = 'https://docs.kodular.io/blocks/math#atan2';

    Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_MIN = 'min';
    Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_MAX = 'maks';
    Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_MIN = 'Parametrelerin en küçüğünü döndürür...';
    Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_MAX = 'Parametrelerin en büyüğünü döndürür..';

    Blockly.Msg.LANG_MATH_DIVIDE = '\u00F7';
    Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_MODULO = 'mod bul';
    Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_REMAINDER = 'kalanı bul';
    Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_QUOTIENT = 'bölümü bul';
    Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_MODULO = 'Modunu döndürür.';
    Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_MODULO = 'https://docs.kodular.io/blocks/math#modulo';
    Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_REMAINDER = 'Kalanı döndürür.';
    Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_REMAINDER = 'https://docs.kodular.io/blocks/math#remainder';
    Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_QUOTIENT = 'Bölümü döndürür.';
    Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_QUOTIENT = 'https://docs.kodular.io/blocks/math#quotient';

    Blockly.Msg.LANG_MATH_RANDOM_INT_HELPURL = 'https://docs.kodular.io/blocks/math#randomint';
    Blockly.Msg.LANG_MATH_RANDOM_INT_TITLE_RANDOM = 'rastgele tamsayı';
    Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT_FROM = 'şu ile';
    Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT_TO = 'bu arasında';
    Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT = '%1 arasında %2 tam sayı';
    Blockly.Msg.LANG_MATH_RANDOM_INT_TOOLTIP = 'Daha üstteki sayı ile daha alttaki sayı arasında\n' +
        'rastgele bir tamsayı oluşturur. Sınırlar 2**30\'dan daha küçük olacak\n' +
        'şekilde kırpılacaktır.';

    Blockly.Msg.LANG_MATH_RANDOM_FLOAT_HELPURL = 'https://docs.kodular.io/blocks/math#randomfrac';
    Blockly.Msg.LANG_MATH_RANDOM_FLOAT_TITLE_RANDOM = 'rastgele kesir';
    Blockly.Msg.LANG_MATH_RANDOM_FLOAT_TOOLTIP = '0 ve 1 arasında rastgele bir sayı döndür.';

    Blockly.Msg.LANG_MATH_RANDOM_SEED_HELPURL = 'https://docs.kodular.io/blocks/math#randomseed';
    Blockly.Msg.LANG_MATH_RANDOM_SEED_TITLE_RANDOM = 'rastgele sınıfını ayarla';
    Blockly.Msg.LANG_MATH_RANDOM_SEED_INPUT_TO = 'şu olarak';
    Blockly.Msg.LANG_MATH_RANDOM_SEED_TOOLTIP = 'Rastgele sayı oluşturmak için\n' +
        'sayısal bir sınıf belirtir';

    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TITLE_CONVERT = 'dönüştür';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_OP_RAD_TO_DEG = 'radyanı dereceye';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_OP_DEG_TO_RAD = 'dereceyi radyana';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TOOLTIP_RAD_TO_DEG = 'Radyan argümanına göre karşılığına gelen\n' +
        '[0, 360) aralığında derece değeri döndürür.';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_HELPURL_RAD_TO_DEG = 'https://docs.kodular.io/blocks/math#convertrad';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TOOLTIP_DEG_TO_RAD = 'Derece argümanına göre karşılığına gelen\n' +
        '[-\u03C0, +\u03C0) aralığında radyan değeri döndürür.';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_HELPURL_DEG_TO_RAD = 'https://docs.kodular.io/blocks/math#convertdeg';

    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_HELPURL = 'https://docs.kodular.io/blocks/math#format';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_TITLE = 'ondalık olarak formatla';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT_NUM = 'sayı';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT_PLACES = 'sıra';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT = '%1 sayısını %2 sıralı ondalık olarak formatla';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_TOOLTIP = 'Belirtilen sıra sayısı kadar\n' +
        'sayıyı ondalıklı halde döndürür.';

    Blockly.Msg.LANG_MATH_IS_A_NUMBER_HELPURL = 'https://docs.kodular.io/blocks/math#isnumber';
    Blockly.Msg.LANG_MATH_IS_A_NUMBER_INPUT_NUM = 'sayı mı?';
    Blockly.Msg.LANG_MATH_IS_A_NUMBER_TOOLTIP = 'Bir şeyin sayı olup olmadığını kontrol eder.';

    Blockly.Msg.LANG_MATH_IS_A_DECIMAL_HELPURL = 'https://docs.kodular.io/blocks/math#isnumber';
    Blockly.Msg.LANG_MATH_IS_A_DECIMAL_INPUT_NUM = '10 tabanında mı?';
    Blockly.Msg.LANG_MATH_IS_A_DECIMAL_TOOLTIP = 'Bir metnin pozitif onluk tabanlı tamsayı olup olmadığını kontrol eder.';

    Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_HELPURL = 'https://docs.kodular.io/blocks/math#isnumber';
    Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_INPUT_NUM = 'onaltılık mı?';
    Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_TOOLTIP = 'Bir metnin onaltılık sayı olup olmadığını kontrol eder.';

    Blockly.Msg.LANG_MATH_IS_A_BINARY_HELPURL = 'https://docs.kodular.io/blocks/math#isnumber';
    Blockly.Msg.LANG_MATH_IS_A_BINARY_INPUT_NUM = 'ikilik mi?';
    Blockly.Msg.LANG_MATH_IS_A_BINARY_TOOLTIP = 'Bir metnin ikilik sayı olup olmadığını kontrol eder.';


    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TITLE_CONVERT = 'sayıyı dönüştür';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_DEC_TO_HEX = 'taban 10\'dan onaltılığa';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_DEC_TO_HEX = '';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_DEC_TO_HEX = '10 tabanından pozitif bir tamsayı alır ve onun onaltılık metin karşılığını döndürür.';

    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_HEX_TO_DEC = 'onaltılıktan taban 10\'a';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_HEX_TO_DEC = '';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_HEX_TO_DEC = 'Onaltılık bir sayı metni alır ve 10 tabanından pozitif metin karşılığını döndürür.';

    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_DEC_TO_BIN = 'taban 10\'dan ikiliğe';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_DEC_TO_BIN = '';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_DEC_TO_BIN = '10 tabanından pozitif bir tamsayı alır ve onun ikilik metin karşılığını döndürür.';

    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_BIN_TO_DEC = 'ikilikten taban 10\'a';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_BIN_TO_DEC = '';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_BIN_TO_DEC = 'İkilik bir sayı metni alır ve 10 tabanından pozitif metin karşılığını döndürür.';

// Text Blocks.
    Blockly.Msg.LANG_CATEGORY_TEXT = 'Metin';
    Blockly.Msg.LANG_TEXT_TEXT_HELPURL = 'https://docs.kodular.io/blocks/text#string';
    Blockly.Msg.LANG_TEXT_TEXT_TOOLTIP = 'Bir metin yazısı.';
    Blockly.Msg.LANG_TEXT_TEXT_LEFT_QUOTE = '\u201C';
    Blockly.Msg.LANG_TEXT_TEXT_RIGHT_QUOTE = '\u201D';

    Blockly.Msg.LANG_TEXT_JOIN_HELPURL = 'https://docs.kodular.io/blocks/text#join';
    Blockly.Msg.LANG_TEXT_JOIN_TITLE_CREATEWITH = 'şununla metin oluştur';
    Blockly.Msg.LANG_TEXT_JOIN_TOOLTIP = 'Tüm girişleri yanyana dizer ve bir metin yazısı haline getirir.\n'
        + 'Eğer giriş yoksa, boş bir metin yaratır.';
    Blockly.Msg.LANG_TEXT_JOIN_TITLE_JOIN = 'bağla';

    Blockly.Msg.LANG_TEXT_JOIN_ITEM_TITLE_ITEM = 'metin';
    Blockly.Msg.LANG_TEXT_JOIN_ITEM_TOOLTIP = '';

    Blockly.Msg.LANG_TEXT_APPEND_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
    Blockly.Msg.LANG_TEXT_APPEND_TO = 'şuna';
    Blockly.Msg.LANG_TEXT_APPEND_APPENDTEXT = 'metin ekle';
    Blockly.Msg.LANG_TEXT_APPEND_VARIABLE = 'öğe';
    Blockly.Msg.LANG_TEXT_APPEND_TOOLTIP = '"%1" değişkenine bir takım metin ekler.';

    Blockly.Msg.LANG_TEXT_LENGTH_HELPURL = 'https://docs.kodular.io/blocks/text#length';
    Blockly.Msg.LANG_TEXT_LENGTH_INPUT_LENGTH = 'uzunluk';
    Blockly.Msg.LANG_TEXT_LENGTH_TOOLTIP = 'Verilen metindeki karakter sayısını\n' +
        '(boşluklar dahil) döndürür.';

    Blockly.Msg.LANG_TEXT_ISEMPTY_HELPURL = 'https://docs.kodular.io/blocks/text#isempty';
    Blockly.Msg.LANG_TEXT_ISEMPTY_INPUT_ISEMPTY = 'boş mu';
    Blockly.Msg.LANG_TEXT_ISEMPTY_TOOLTIP = 'Metnin uzunluğu 0 ise doğru,\n' + 'aski takdirde yanlış döndürür.';

    Blockly.Msg.LANG_TEXT_COMPARE_LT = ' <';
    Blockly.Msg.LANG_TEXT_COMPARE_EQUAL = ' =';
    Blockly.Msg.LANG_TEXT_COMPARE_NEQ = ' ≠';
    Blockly.Msg.LANG_TEXT_COMPARE_GT = ' >';
    Blockly.Msg.LANG_TEXT_COMPARE_HELPURL = 'https://docs.kodular.io/blocks/text#compare';
    Blockly.Msg.LANG_TEXT_COMPARE_INPUT_COMPARE = 'metni karşılaştır';
    Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_LT = 'metin1\'in sözlük sırasında metin2\'den küçük olup olmadığını kontrol eder.\n'
        + 'eğer bir metin diğerinin öneki ise, kısa olan metin daha küçük olarak düşünülecektir.\n'
        + 'Küçük harf karakterler büyük harflerden daha üstündür.';
    Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_EQUAL = 'Metin dizelerinin aynı olup olmadığını test eder., örnek, aynı karakterler\n'
        + 'Bu, metin dizelerinin sayı olması durumunda normalden farklıdır: 123 ve 0123 =\n'
        + 'ancak metin değil =.';
    Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_GT = 'metin1\'in sözlük sırasında metin2\'den büyük olup olmadığını kontrol eder.\n'
        + 'eğer bir metin diğerinin öneki ise, kısa olan metin daha küçük olarak düşünülecektir.\n'
        + 'Küçük harf karakterler büyük harflerden daha üstündür.';
    Blockly.Msg.LANG_TEXT_TEXT_OBFUSCATE_TOOLTIP = "Metin üretir, bir metin bloğu gibi.  Bunun farkı ise \n"
        + "bu metnin uygulamanın APK'sında kolay kolay keşfedilmesini önler.  Bu bloğu API anahtarları gibi \n"
        + "gizli bilgileri saklamak için kullanın.  \n"
        + "Uyarı: Bu, uzman rakiplere karşı yalnızca çok düşük güvenlik sağlar.";
    Blockly.Msg.LANG_TEXT_TEXT_OBFUSCATE = 'Gizlenmiş Metin';
    Blockly.Msg.LANG_TEXT_TEXT_OBFUSCATE_HELPURL = 'https://docs.kodular.io/blocks/text#obfuscatetext';

    /*Blockly.Msg.LANG_TEXT_ENDSTRING_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_TEXT_ENDSTRING_INPUT = 'letters in text';
     Blockly.Msg.LANG_TEXT_ENDSTRING_TOOLTIP = 'Returns specified number of letters at the beginning or end of the text.';
     Blockly.Msg.LANG_TEXT_ENDSTRING_OPERATOR_FIRST = 'first';
     Blockly.Msg.LANG_TEXT_ENDSTRING_OPERATOR_LAST = 'last';*/

    /*Blockly.Msg.LANG_TEXT_INDEXOF_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_TEXT_INDEXOF_TITLE_FIND = 'find';
     Blockly.Msg.LANG_TEXT_INDEXOF_INPUT_OCCURRENCE = 'occurrence of text';
     Blockly.Msg.LANG_TEXT_INDEXOF_INPUT_INTEXT = 'in text';
     Blockly.Msg.LANG_TEXT_INDEXOF_TOOLTIP = 'Returns the index of the first/last occurrence\n' +
     'of first text in the second text.\n' +
     'Returns 0 if text is not found.';
     Blockly.Msg.LANG_TEXT_INDEXOF_OPERATOR_FIRST = 'first';
     Blockly.Msg.LANG_TEXT_INDEXOF_OPERATOR_LAST = 'last';*/

    /*Blockly.Msg.LANG_TEXT_CHARAT_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_TEXT_CHARAT_INPUT_AT = 'letter at';
     Blockly.Msg.LANG_TEXT_CHARAT_INPUT_INTEXT = 'in text';
     Blockly.Msg.LANG_TEXT_CHARAT_TOOLTIP = 'Returns the letter at the specified position.';*/

    Blockly.Msg.LANG_TEXT_CHANGECASE_OPERATOR_UPPERCASE = 'büyük harf';
    Blockly.Msg.LANG_TEXT_CHANGECASE_OPERATOR_DOWNCASE = 'küçük harf';
    Blockly.Msg.LANG_TEXT_CHANGECASE_TOOLTIP_UPPERCASE = 'Metnin büyük harflere çevrilmiş bir kopyasını döndürür.';
    Blockly.Msg.LANG_TEXT_CHANGECASE_HELPURL_UPPERCASE = 'https://docs.kodular.io/blocks/text#upcase';
    Blockly.Msg.LANG_TEXT_CHANGECASE_TOOLTIP_DOWNCASE = 'Metnin küçük harflere çevrilmiş bir kopyasını döndürür.';
    Blockly.Msg.LANG_TEXT_CHANGECASE_HELPURL_DOWNCASE = 'https://docs.kodular.io/blocks/text#downcase';

    Blockly.Msg.LANG_TEXT_TRIM_HELPURL = 'https://docs.kodular.io/blocks/text#trim';
    Blockly.Msg.LANG_TEXT_TRIM_TITLE_TRIM = 'kırp';
    Blockly.Msg.LANG_TEXT_TRIM_TOOLTIP = 'Metnin ana veya sondaki boşlukların kaldırıldığı\n'
        + 'bir kopyasını döndürür.';

    Blockly.Msg.LANG_TEXT_STARTS_AT_HELPURL = 'https://docs.kodular.io/blocks/text#startsat';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_STARTS_AT = 'şununla başlar';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_TEXT = 'metin';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_PIECE = 'parça';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT = 'şununla başlar  metin %1 parça %2';
    Blockly.Msg.LANG_TEXT_STARTS_AT_TOOLTIP = 'Parçanın metindeki başlangıç pozisyonunu döndürür.\n'
        + '1 sayısı metnin başını temsil eder. Eğer parça metinde\n'
        + 'hiç yoksa 0 döndürür.';

    Blockly.Msg.LANG_TEXT_CONTAINS_HELPURL = 'https://docs.kodular.io/blocks/text#contains';
    Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_CONTAINS = 'içeriyor';
    Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_TEXT = 'metin';
    Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_PIECE = 'parça';
    Blockly.Msg.LANG_TEXT_CONTAINS_INPUT = 'içeriyor  metin %1 parça %2';
    Blockly.Msg.LANG_TEXT_CONTAINS_TOOLTIP = 'Parçanın metinde olup olmadığını test eder.';

    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL = '';
    Blockly.Msg.LANG_TEXT_SPLIT_INPUT_TEXT = 'metin';
    Blockly.Msg.LANG_TEXT_SPLIT_INPUT_AT = 'şuradan';
    Blockly.Msg.LANG_TEXT_SPLIT_INPUT_AT_LIST = 'şuradan (liste)';
    Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_FIRST = 'ilkinde böl';
    Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_FIRST_OF_ANY = 'herhangi birinin ilkinde böl';
    Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT = 'böl';
    Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_ANY = 'herhangi birinde böl';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_FIRST = 'Metnin ilk \'şuradan\' kısmını bölme noktası olarak kullanarak verilen metni iki parçaya böler \n'
        + 've bölme noktasından önceki parçadan ve bölme noktasından sonraki parçadan oluşan iki maddeli bir liste döndürür. \n'
        + '"Elma,muz,kiraz,köpek maması" nın virgülde ayrılması sonucunda, iki öğe içeren bir liste döndürür:\n'
        + 'ilki "Elma", ikincisi ise "muz,kiraz,köpek maması"\n'
        + '"Elma"nın yanında bulunan virgülün sonuçta gözükmediğine dikkat edin, çünkü o bir bölme noktasıdır.';
    
    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_FIRST = 'https://docs.kodular.io/blocks/text#splitat';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_FIRST_OF_ANY = 'Listedeki herhangi bir öğenin ilk konumunu bölme noktası olarak kullanarak, \n'
        + 'verilen metni iki maddeli bir listeye böler. '
        + '"Ben elma muz elma üzüm severim" cümlesini "(mu,el)" listesine bölme işleminden sonra iki öğeli bir liste döndürür. \n'
        + 'İlki "Ben" ve ikincisi de "ma muz elma üzün severim" dir';
    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_FIRST_OF_ANY = 'https://docs.kodular.io/blocks/text#splitatfirstofany';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT = 'Metnin \'şuradan\' kısmını bölme noktası olarak kullanarak üretilen sonucun bir listesini döndürür.  \n'
        + '"bir,iki,üç,dört" ün "," (virgül) ile ayrılması sonucunda, "(bir iki üç dört)" listesini döndürür. \n'
        + '"bir-patates,iki-patates,üç-patates,dört-patates" in "-patates" kelimesinde ayrılması durumunda, "(bir iki üç dört)" listesini döndürür.';
    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT = 'https://docs.kodular.io/blocks/text#split';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_ANY = 'Metnin herhangi bir \'şuradan\' kısmını bölme noktası olarak kullanarak verilen metni iki parçaya böler \n'
        + 've sonuçlarının bir listesini döndürür. \n'
        + '"appleberry,muz,kiraz,köpek maması" cümlesini ilk öğesi virgül ve ikinci öğesi "rry" olan bir \n'
        + 'listeye bölme sonucunda dört öğeli bir liste döndürür: \n'
        + '"(applebe muz kiraz köpek maması)".';
    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_ANY = 'https://docs.kodular.io/blocks/text#splitatany';

    /*.LANG_TEXT_PRINT_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
     Blockly.Msg.LANG_TEXT_PRINT_TITLE_PRINT = 'print';
     Blockly.Msg.LANG_TEXT_PRINT_TOOLTIP = 'Print the specified text, number or other value.';*/

    /*Blockly.Msg.LANG_TEXT_PROMPT_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode92.html';
     Blockly.Msg.LANG_TEXT_PROMPT_TITLE_PROMPT_FOR = 'prompt for';
     Blockly.Msg.LANG_TEXT_PROMPT_TITILE_WITH_MESSAGE = 'with message';
     Blockly.Msg.LANG_TEXT_PROMPT_TOOLTIP = 'Prompt for user input with the specified text.';
     Blockly.Msg.LANG_TEXT_PROMPT_TYPE_TEXT = 'text';
     Blockly.Msg.LANG_TEXT_PROMPT_TYPE_NUMBER = 'number';*/

    Blockly.Msg.LANG_TEXT_SPLIT_AT_SPACES_HELPURL = 'https://docs.kodular.io/blocks/text#splitspaces';
    Blockly.Msg.LANG_TEXT_SPLIT_AT_SPACES_TITLE = 'boşluklarda böl';
    Blockly.Msg.LANG_TEXT_SPLIT_AT_TOOLTIP = 'Metni boşluklarda parçalara ayırır.';

    Blockly.Msg.LANG_TEXT_SEGMENT_HELPURL = 'https://docs.kodular.io/blocks/text#segment';
    Blockly.Msg.LANG_TEXT_SEGMENT_TITLE_SEGMENT = 'parça';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_START = 'başlangıç';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_LENGTH = 'uzunluk';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_TEXT = 'metin';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT = 'parça  metin %1 başlangıç %2 uzunluk %3';
    Blockly.Msg.LANG_TEXT_SEGMENT_AT_TOOLTIP = 'Verilen uzunluktaki parçayı, verilen metnin\n'
        + 'belirtilen başlangıç pozisyonundan başlayarak metinden çıkarır.  1. pozisyon\n'
        + 'metnin ilk karakterini temsil eder.';

    Blockly.Msg.LANG_TEXT_REPLACE_ALL_HELPURL = 'https://docs.kodular.io/blocks/text#replaceall';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_SEGMENT = 'parça';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_TEXT = 'metin';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_TITLE_REPLACE_ALL = 'hepsini değiştir';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_REPLACEMENT = 'şununla değiştir';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT = 'tüm metni değiştir %1 parça %2 şununla %3';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_TOOLTIP = 'Segmentin tüm oluşumlarını şununla değiştir kısmı ile değiştirerek elde edilen yeni bir metni döndürür.';

    Blockly.Msg.LANG_TEXT_TEXT_IS_STRING_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#isstring';
    Blockly.Msg.LANG_TEXT_TEXT_IS_STRING_TITLE = 'metin mi?';
    Blockly.Msg.LANG_TEXT_TEXT_IS_STRING_TOOLTIP = 'Eğer giriş bir metin ile doğru döndürür.';

// Lists Blocks.
    Blockly.Msg.LANG_CATEGORY_LISTS = 'Listeler';
//Blockly.Msg.LANG_LISTS_CREATE_EMPTY_HELPURL = 'http://en.wikipedia.org/wiki/Linked_list#Empty_lists';
    Blockly.Msg.LANG_LISTS_CREATE_EMPTY_TITLE = 'boş liste yap';
//Blockly.Msg.LANG_LISTS_CREATE_EMPTY_TOOLTIP = 'Bir liste döndürür, uzunluğu sıfırdır, ve hiç bir veri içermez.';

    Blockly.Msg.LANG_LISTS_CREATE_WITH_EMPTY_HELPURL = 'https://docs.kodular.io/blocks/lists#makealist';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_TITLE_MAKE_LIST = 'liste yap';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_TOOLTIP = 'İstediğiniz sayıda öğe içeren bir liste oluşturur.';

    Blockly.Msg.LANG_LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = 'liste';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_CONTAINER_TOOLTIP = 'Bu liste bloğunu yeniden düzenlemek için\n' +
        'kısımların yerlerini değiştirin, ekleyin veya kaldırın.';

    Blockly.Msg.LANG_LISTS_CREATE_WITH_ITEM_TITLE = 'öğe';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_ITEM_TOOLTIP = 'Listeye bir öğe ekler.';

    Blockly.Msg.LANG_LISTS_ADD_ITEM_TITLE = 'öğe';
    Blockly.Msg.LANG_LISTS_ADD_ITEM_TOOLTIP = 'Listeye bir öğe ekler.';
    Blockly.Msg.LANG_LISTS_ADD_ITEM_HELPURL = 'https://docs.kodular.io/blocks/lists#additems';

    Blockly.Msg.LANG_LISTS_SELECT_ITEM_TITLE_HELPURL = 'https://docs.kodular.io/blocks/lists#selectlistitem';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_TITLE_SELECT = 'liste öğesi seç';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT_LIST = 'liste';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT_INDEX = 'pozisyon';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT = 'liste öğesi seç  liste %1 pozisyon %2';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_TOOLTIP = 'Listeden belirtilen pozisyondaki öğeyi döndürür.';

    Blockly.Msg.LANG_LISTS_IS_IN_HELPURL = 'https://docs.kodular.io/blocks/lists#inlist';
    Blockly.Msg.LANG_LISTS_IS_IN_TITLE_IS_IN = 'listede mi?';
    Blockly.Msg.LANG_LISTS_IS_IN_INPUT_THING = 'şu';
    Blockly.Msg.LANG_LISTS_IS_IN_INPUT_LIST = 'liste';
    Blockly.Msg.LANG_LISTS_IS_IN_INPUT = 'listede mi? şey %1 liste %2';
    Blockly.Msg.LANG_LISTS_IS_IN_TOOLTIP = 'Eğer öğe listedeyse doğru, değilse yanlış döndürür.';

    Blockly.Msg.LANG_LISTS_POSITION_IN_HELPURL = 'https://docs.kodular.io/blocks/lists#indexinlist';
    Blockly.Msg.LANG_LISTS_POSITION_IN_TITLE_POSITION = 'listedeki pozisyon';
    Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT_THING = 'şey';
    Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT_LIST = 'liste';
    Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT = 'listedeki pozisyon  şey %1 liste %2';
    Blockly.Msg.LANG_LISTS_POSITION_IN_TOOLTIP = 'Bir şeyin listedeki pozisyon numarasını bulur. Eğer listede yoksa '
        + '0 döndürür.';

    Blockly.Msg.LANG_LISTS_PICK_RANDOM_ITEM_HELPURL = 'https://docs.kodular.io/blocks/lists#pickrandomitem';
    Blockly.Msg.LANG_LISTS_PICK_RANDOM_TITLE_PICK_RANDOM = 'rastegele öğe seç';
    Blockly.Msg.LANG_LISTS_PICK_RANDOM_ITEM_INPUT_LIST = 'liste';
    Blockly.Msg.LANG_LISTS_PICK_RANDOM_TOOLTIP = 'Listeden rastgele bir öğe seçer.';

    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_HELPURL = 'https://docs.kodular.io/blocks/lists#replace';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_TITLE_REPLACE = 'liste öğesi değiştir';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_LIST = 'liste';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_INDEX = 'pozisyon';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_REPLACEMENT = 'şununla değiştir';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT = 'liste öğesini değiştir  liste %1 pozisyon %2 şununla değiştir %3';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_TOOLTIP = 'Listeden belirtilen pozisyondaki öğeyi başka bir şey ile değiştirir.';

    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_HELPURL = 'https://docs.kodular.io/blocks/lists#removeitem';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_TITLE_REMOVE = 'liste öğesi kaldır';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT_LIST = 'liste';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT_INDEX = 'pozisyon';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT = 'liste öğesini kaldır  liste %1 pozisyon %2';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_TOOLTIP = 'Listeden belirtilen pozisyondaki öğeyi kaldırır.';

    /*Blockly.Msg.LANG_LISTS_REPEAT_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_LISTS_REPEAT_TITLE_CREATE = 'create list with item';
     Blockly.Msg.LANG_LISTS_REPEAT_INPUT_REPEATED = 'repeated';
     Blockly.Msg.LANG_LISTS_REPEAT_INPUT_TIMES = 'times';
     Blockly.Msg.LANG_LISTS_REPEAT_TOOLTIP = 'Creates a list consisting of the given value\n' +
     'repeated the specified number of times.';*/

    Blockly.Msg.LANG_LISTS_LENGTH_HELPURL = 'https://docs.kodular.io/blocks/lists#lengthoflist';
    Blockly.Msg.LANG_LISTS_LENGTH_INPUT_LENGTH = 'listenin uzunluğu';
    Blockly.Msg.LANG_LISTS_LENGTH_INPUT_LIST = 'liste';
    Blockly.Msg.LANG_LISTS_LENGTH_INPUT = 'listenin uzunluğu liste %1';
    Blockly.Msg.LANG_LISTS_LENGTH_TOOLTIP = 'Listedeki öğe sayısını sayar.';

    Blockly.Msg.LANG_LISTS_APPEND_LIST_HELPURL = 'https://docs.kodular.io/blocks/lists#append';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_TITLE_APPEND = 'listeyi bağla';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT_LIST1 = 'liste1';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT_LIST2 = 'liste2';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT = 'listeyi bağla  liste1 %1 liste2 %2';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_TOOLTIP = 'liste2\'deki tüm öğeleri liste1\'in sonuna ekler. Ekleme '
        + 'işleminden sonra, liste1 bu ek öğeleri içerecektir, ancak liste2 değişmeyecektir.';

    Blockly.Msg.LANG_LISTS_ADD_ITEMS_HELPURL = 'https://docs.kodular.io/blocks/lists#additems';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_TITLE_ADD = 'liste öğesi ekle';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT_LIST = ' liste';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT_ITEM = 'öğe';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT = 'listeye öğe ekle liste %1 öğe %2';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_TOOLTIP = 'Bir listenin sonuna öğe ekler.';

    Blockly.Msg.LANG_LISTS_ADD_ITEMS_CONTAINER_TITLE_ADD = 'liste';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_CONTAINER_TOOLTIP = 'Bu liste bloğunu yeniden düzenlemek için\n' +
        'kısımların yerlerini değiştirin, ekleyin veya kaldırın.';

    Blockly.Msg.LANG_LISTS_COPY_HELPURL = 'https://docs.kodular.io/blocks/lists#copy';
    Blockly.Msg.LANG_LISTS_COPY_TITLE_COPY = 'listeyi kopyala';
    Blockly.Msg.LANG_LISTS_COPY_INPUT_LIST = 'liste';
    Blockly.Msg.LANG_LISTS_COPY_TOOLTIP = 'Listenin bir kopyasını oluşturur, tüm alt listeler dahil.';

    Blockly.Msg.LANG_LISTS_IS_LIST_HELPURL = 'https://docs.kodular.io/blocks/lists#isalist';
    Blockly.Msg.LANG_LISTS_IS_LIST_TITLE_IS_LIST = 'liste mi?';
    Blockly.Msg.LANG_LISTS_IS_LIST_INPUT_THING = 'şey';
    Blockly.Msg.LANG_LISTS_IS_LIST_TOOLTIP = 'Bir şeyin liste olup olmadığını kontrol eder.';

    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_HELPURL = 'https://docs.kodular.io/blocks/lists#listtocsvrow';
    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_TITLE_TO_CSV = 'listeden csv satırına';
    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_INPUT_LIST = 'liste';
    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_TOOLTIP = 'Listeyi bir tablonun satırı olarak yorumlar ve satırı temsil eden bir CSV \(virgülle ayrılmış değer\) metni döndürür.'
        + ' Satır listesindeki her öğe bir alan olarak kabul edilir'
        + ' ve sonuçta elde edilen CSV metninde çift tırnak işareti alır. '
        + 'Öğeler virgüllerle ayrılır. Döndürülen satır metninin sonunda bir satır ayırıcı yoktur.';

    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_HELPURL = 'https://docs.kodular.io/blocks/lists#listfromcsvrow';
    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_TITLE_FROM_CSV = 'csv satırından liste';
    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_INPUT_TEXT = 'metin';
    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_TOOLTIP = 'Bir alan listesi oluşturmak için metni CSV (virgülle ayrılmış değer) biçimli satır olarak ayrıştırır. '
        + 'Satır metninin, alanların içine alınmamış yeni satırlar içermesi bir hatadır \(efektif olarak, çoklu satırlarda\). '
        + 'Satır metninin tek bir yeni satırda veya CRLF\'de bitmesi kabul edilebilir.';

    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_HELPURL = 'https://docs.kodular.io/blocks/lists#listtocsvtable';
    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_TITLE_TO_CSV = 'listeden csv tablosuna';
    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_INPUT_LIST = 'liste';
    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_TOOLTIP = 'Listeyi satır ana formatında bir tablo olarak yorumlar '
        + 've tabloyu temsil eden bir CSV \(virgülle ayrılmış değer\) metni verir. Listedeki her '
        + 'öğenin kendisi CSV tablosunun bir satırını temsil eden bir liste olmalıdır. Satır listesindeki her '
        + 'öğe bir alan olarak kabul edilir ve sonuçta elde edilen CSV metninde çift tırnak işareti alır. '
        + 'Döndürülen metinde, satırlardaki öğeler virgüllerle ve satırlar CRLF \(\\r\\n\) ile ayrılır.';

    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_HELPURL = 'https://docs.kodular.io/blocks/lists#listfromcsvtable';
    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_TITLE_FROM_CSV = 'csv tablosundan liste';
    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_INPUT_TEXT = 'metin';
    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_TOOLTIP = 'CSV olarak bir metin işler \(virgülle-ayrılmış-değerler\), '
        + 'CSV formatlı tablolarla her satır için, bölümlerle listeler oluşturulabilir. Satırlar '
        + 'yeni satır karakteri ile ayrılabilir \(\\n\) ya da CRLF \(\\r\\n\) ile.';

    Blockly.Msg.LANG_LISTS_INSERT_ITEM_HELPURL = 'https://docs.kodular.io/blocks/lists#insert';
    Blockly.Msg.LANG_LISTS_INSERT_TITLE_INSERT_LIST = 'liste öğesi yerleştir';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT_LIST = 'liste';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT_INDEX = 'pozisyon';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT_ITEM = 'öğe';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT = 'liste öğesi ekle  liste %1 pozisyon %2 öğe %3';
    Blockly.Msg.LANG_LISTS_INSERT_TOOLTIP = 'Belirtilen pozisyonda listeye bir öğe ekle.';

    Blockly.Msg.LANG_LISTS_IS_EMPTY_HELPURL = 'https://docs.kodular.io/blocks/lists#islistempty';
    Blockly.Msg.LANG_LISTS_TITLE_IS_EMPTY = 'liste boş mu?';
    Blockly.Msg.LANG_LISTS_INPUT_LIST = 'liste';
    Blockly.Msg.LANG_LISTS_IS_EMPTY_TOOLTIP = 'Liste boş ise doğru döndürür.';

    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_HELPURL = 'https://docs.kodular.io/blocks/lists#lookuppairs';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_TITLE_LOOKUP_IN_PAIRS = 'çiftlilerde ara';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_KEY = 'anahtar';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_PAIRS = 'çiftli';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_NOT_FOUND = 'bulunamadığında';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT = 'çiftlilerde ara  anahtar %1 çiftli %2 bulunamadığında %3';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_TOOLTIP = 'Çiftlilerin olduğu bir listede anahtarın bağlı olduğu değeri verir.';

    /*Blockly.Msg.LANG_LISTS_INDEX_OF_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_LISTS_INDEX_OF_TITLE_FIND = 'find';
     Blockly.Msg.LANG_LISTS_INDEX_OF_INPUT_OCCURRENCE = 'occurrence of item';
     Blockly.Msg.LANG_LISTS_INDEX_OF_INPUT_IN_LIST = 'in list';
     Blockly.Msg.LANG_LISTS_INDEX_OF_TOOLTIP = 'Returns the index of the first/last occurrence\n' +
     'of the item in the list.\n' +
     'Returns 0 if text is not found.';
     Blockly.Msg.LANG_LISTS_INDEX_OF_FIRST = 'first';
     Blockly.Msg.LANG_LISTS_INDEX_OF_LAST = 'last';

     Blockly.Msg.LANG_LISTS_GET_INDEX_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_LISTS_GET_INDEX_TITLE_GET = 'get item at';
     Blockly.Msg.LANG_LISTS_GET_INDEX_INPUT_IN_LIST = 'in list';
     Blockly.Msg.LANG_LISTS_GET_INDEX_TOOLTIP = 'Returns the value at the specified position in a list.';

     Blockly.Msg.LANG_LISTS_SET_INDEX_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_LISTS_SET_INDEX_INPUT_SET = 'set item at';
     Blockly.Msg.LANG_LISTS_SET_INDEX_INPUT_IN_LIST = 'in list';
     Blockly.Msg.LANG_LISTS_SET_INDEX_INPUT_TO = 'to';
     Blockly.Msg.LANG_LISTS_SET_INDEX_TOOLTIP = 'Sets the value at the specified position in a list.';*/

// Variables Blocks.
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_HELPURL = 'https://docs.kodular.io/blocks/variables#global';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TITLE_INIT = 'küresel tanımla';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_NAME = 'isim';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TO = 'şuna';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_COLLAPSED_TEXT = 'küresel';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TOOLTIP = 'Küresel bir değer oluşturur ve değeri ona bağlı olan bloklar verir.';

    Blockly.Msg.LANG_VARIABLES_GET_HELPURL = 'https://docs.kodular.io/blocks/variables#get';
    Blockly.Msg.LANG_VARIABLES_GET_TITLE_GET = 'al';
    /* Blockly.Msg.LANG_VARIABLES_GET_INPUT_ITEM = 'item'; */ // [lyn, 10/14/13] unused
    Blockly.Msg.LANG_VARIABLES_GET_COLLAPSED_TEXT = 'al';
    Blockly.Msg.LANG_VARIABLES_GET_TOOLTIP = 'Bu değişkenin değerini döndürür.';

    Blockly.Msg.LANG_VARIABLES_SET_HELPURL = 'https://docs.kodular.io/blocks/variables#set';
    Blockly.Msg.LANG_VARIABLES_SET_TITLE_SET = 'ayarla';
    /* Blockly.Msg.LANG_VARIABLES_SET_INPUT_ITEM = 'item'; */ // [lyn, 10/14/13] unused
    Blockly.Msg.LANG_VARIABLES_SET_TITLE_TO = 'şuna';
    Blockly.Msg.LANG_VARIABLES_SET_COLLAPSED_TEXT = 'ayarla';
    Blockly.Msg.LANG_VARIABLES_SET_TOOLTIP = 'Bu değişkenin değerini girişi ile eşitleştirir.';
    Blockly.Msg.LANG_VARIABLES_VARIABLE = ' değişken';

    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_HELPURL = 'https://docs.kodular.io/blocks/variables#do';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TITLE_INIT = 'yerel tanımla';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_DEFAULT_NAME = 'isim';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_INPUT_TO = 'şuna';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_IN_DO = 'içinde';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_COLLAPSED_TEXT = 'yerel';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TOOLTIP = 'Bloğun sadece yap kısmında erişilebilen değişkenler oluşturmanızı sağlar.';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TRANSLATED_NAME = 'yerel oluşturda yap';

    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_HELPURL = 'https://docs.kodular.io/blocks/variables#return';
    /* // These don't differ between the statement and expression
     Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TITLE_INIT = 'yerel tanımla';
     Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_INPUT_NAME = 'isim';
     Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_INPUT_TO = 'şuna';
     */
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_IN_RETURN = 'içinde';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_COLLAPSED_TEXT = 'yerel';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TOOLTIP = 'Bloğun sadece geri dönüş kısmında erişilebilen değişkenler oluşturmanızı sağlar.';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TRANSLATED_NAME = 'geri dönüşün içinde yerel değişken';

    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_CONTAINER_TITLE_LOCAL_NAMES = 'yerel isimler';
    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_CONTAINER_TOOLTIP = '';

    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_ARG_TITLE_NAME = 'isim';
    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_ARG_DEFAULT_VARIABLE = 'x';

// Procedures Blocks.
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_HELPURL = 'https://docs.kodular.io/blocks/procedures#do';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DEFINE = 'şuna';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_PROCEDURE = 'prosedür';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DO = 'yap';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_COLLAPSED_PREFIX = 'şuna ';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_TOOLTIP = 'Geri dönüş değeri döndürmeyen bir prosedür.';

    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_HELPURL = 'https://docs.kodular.io/blocks/procedures#doreturn';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_THEN_RETURN = 'sonuç';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_DO = 'yap';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_RETURN = 'sonuç';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_TOOLTIP = '\'yap\' kısmındaki ifadeleri yapar ve geri değer gönderir. Eğer değişkene değer atamadan önce bir prosedür çalıştırmak istiyorsanız kullanışlıdır.';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_COLLAPSED_TEXT = 'yap/sonuç';

    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_HELPURL = 'https://docs.kodular.io/blocks/procedures#return';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_DEFINE = 'şuna';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_PROCEDURE = Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_PROCEDURE;
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_DO = Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DO;
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_RETURN = 'sonuç';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_COLLAPSED_PREFIX = 'şuna ';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_TOOLTIP = 'Geri dönüş değeri döndüren bir prosedür.';

    Blockly.Msg.LANG_PROCEDURES_DEF_DUPLICATE_WARNING = 'Uyarı:\n' +
        'Bu prosedürün birden fazla\n' +
        'aynı girişi var.';

    Blockly.Msg.LANG_PROCEDURES_GET_HELPURL = 'https://docs.kodular.io/blocks/procedures#get';

    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_HELPURL = 'https://docs.kodular.io/blocks/procedures#do';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_CALL = 'çağır ';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_PROCEDURE = 'prosedür';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_COLLAPSED_PREFIX = 'çağır ';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_TOOLTIP = 'Geri dönüş değeri olmadan bir prosedür çağır.';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_TRANSLATED_NAME = 'çağır geri göndermesiz';

    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_HELPURL = 'https://docs.kodular.io/blocks/procedures#return';
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_CALL = Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_CALL;
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_PROCEDURE = Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_PROCEDURE;
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_COLLAPSED_PREFIX = 'çağır ';
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_TOOLTIP = 'Geri dönüş değeriyle bir prosedür çağır.';
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_TRANSLATED_NAME = 'çağır geri gönder';

    Blockly.Msg.LANG_PROCEDURES_MUTATORCONTAINER_TITLE = 'girişler';
    Blockly.Msg.LANG_PROCEDURES_MUTATORARG_TITLE = 'giriş:';

    Blockly.Msg.LANG_PROCEDURES_HIGHLIGHT_DEF = 'Prosedürü İşaretle';

    Blockly.Msg.LANG_PROCEDURES_MUTATORCONTAINER_TOOLTIP = '';
    Blockly.Msg.LANG_PROCEDURES_MUTATORARG_TOOLTIP = '';

// Components Blocks.
    Blockly.Msg.UNDEFINED_BLOCK_TOOLTIP = "Bu blok tanımlanmadı. Bu bloğu silin!";

    Blockly.Msg.LANG_COMPONENT_BLOCK_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TITLE_WHEN = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TITLE_DO = 'yap';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_EVENT_TITLE = 'herhangi bir ';

    Blockly.Msg.LANG_COMPONENT_BLOCK_METHOD_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_METHOD_TITLE_CALL = 'çağır ';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_TITLE_CALL = 'çağır ';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_TITLE_FOR_COMPONENT = 'bileşen için';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GETTER_HELPURL = '';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_GETTER_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_GETTER_TITLE_OF_COMPONENT = 'bileşenin';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_TITLE_SET = 'şu ';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_TITLE_TO = ' şuna ayarla';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_SET = 'şu ';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_TO = ' şuna ayarla';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_OF_COMPONENT = 'bileşenin';

//Misc
    Blockly.Msg.SHOW_WARNINGS = "Uyarıları Göster";
    Blockly.Msg.HIDE_WARNINGS = "Uyarıları Gizle";
    Blockly.Msg.MISSING_SOCKETS_WARNINGS = "Tüm soketleri bloklar ile doldurmalısınız";
    Blockly.Msg.WRONG_TYPE_BLOCK_WARINGS = "Bu blok bir olay bloğuna ya da prosedür tanımına bağlanmalıdır";

// Messages from replmgr.js
    Blockly.Msg.REPL_ERROR_FROM_COMPANION = "Eşlikçiden Hata";
    Blockly.Msg.REPL_NETWORK_CONNECTION_ERROR = "İnternet Bağlantısı Hatası";
    Blockly.Msg.REPL_NETWORK_ERROR = "İnternet Hatası";
    Blockly.Msg.REPL_NETWORK_ERROR_RESTART = "Eşlikçi ile bağlanırken internet hatası oluştu.<br />Eşlikçiyi yeniden başlatıp tekrar bağlanmayı deneyin";
    Blockly.Msg.REPL_OK = "Tamam";
    Blockly.Msg.REPL_COMPANION_VERSION_CHECK = "Eşlikçi Sürümünü Kontrol Et";
    Blockly.Msg.REPL_COMPANION_OUT_OF_DATE = 'Kullandığınız Eşlikçi sürümü eski. Güncellemeye başlamak için "Tamam" tuşuna tıklayın. ';
    Blockly.Msg.REPL_EMULATORS = "Emülatörünüzün";
    Blockly.Msg.REPL_DEVICES = "Cihazınızın";
    Blockly.Msg.REPL_APPROVE_UPDATE = " ekranını kontrol edin çünkü güncellemeyi onaylamanız için soru sorulacak.";
    Blockly.Msg.REPL_NOT_NOW = "Henüz Değil";
    Blockly.Msg.REPL_COMPANION_OUT_OF_DATE1 = "Kullandığınız Eşlikçi sürümü eski.<br/><br/>Kodular'ın bu sürümü bu Kodular Eşlikçi sürümü ile kullanılmalıdır:";
    Blockly.Msg.REPL_COMPANION_OUT_OF_DATE_IMMEDIATE = "Kullandığınız Eşlikçi sürümü eski. En yakın sürede Kodular Eşlikçi'sini güncellemelisiniz. Eğer mağazada otomatik güncellemeler açıksa, güncelleme kendiliğinden başlayacak.";
    Blockly.Msg.REPL_COMPANION_WRONG_PACKAGE = "Kullandığınız Eşlikçi Kodular'ın başka bir sürümü için yapıldı. Doğru Eşlikçi'yi almak için Yardım->Eşlikçi Bilgi menüsüne bakın.";
    Blockly.Msg.REPL_DISMISS = "Yoksay";
    Blockly.Msg.REPL_SOFTWARE_UPDATE = "Yazılım Güncelleştirmesi";
    Blockly.Msg.REPL_OK_LOWER = "Tamam";
    Blockly.Msg.REPL_GOT_IT = "Anlaşıldı";
    Blockly.Msg.REPL_UPDATE_INFO = 'Güncelleme şimdi cihazınıza kuruluyor. Cihazınızın (ya da emülatörün) ekranını izleyin ve istendiğinde yazılım kurulumunu onaylayın. <br /><br />ÖNEMLİ: Güncelleme bittiğinde, "TAMAM" tuşuna tıklayın ("AÇ" tuşuna basmayın). Daha sonrasında tarayıcınızdan Kodular\'a girin, "Bağlan" menüsünden "Bağlantıyı Sıfırla" seçeneğini seçin.  Ardından cihazı yeniden bağlayın.';

    Blockly.Msg.REPL_UPDATE_NO_UPDATE = "Herhangi bir Güncelleme Mevcut Değil";
    Blockly.Msg.REPL_UPDATE_NO_CONNECTION = "Güncelleyebilmeniz için öncelikle bir Eşlikçi'ye bağlı olmanız gerekmektedir";
    Blockly.Msg.REPL_UNABLE_TO_UPDATE = "Cihaza/Emülatöre güncelleme yüklenemiyor";
    Blockly.Msg.REPL_UNABLE_TO_LOAD = "Kodular sunucusundan güncelleme yüklenemedi";
    Blockly.Msg.REPL_UNABLE_TO_LOAD_NO_RESPOND = "Kodular sunucusundan güncelleme yüklenemedi (sunucu cevap vermiyor)";
    Blockly.Msg.REPL_NOW_DOWNLOADING = "Kodular sunucusundan güncellemeyi indiriyoruz, lütfen hazırda bekleyin";
    Blockly.Msg.REPL_RUNTIME_ERROR = "Çalışma Anı Hatası";
    Blockly.Msg.REPL_NO_ERROR_FIVE_SECONDS = "<br/><i>Not:</i>&nbsp;5 saniye içinde başka bir hata mesajı görmeyeceksiniz.";
    Blockly.Msg.REPL_CONNECTING_USB_CABLE = "USB Kablosu ile Bağlanılıyor";
    Blockly.Msg.REPL_STARTING_EMULATOR = "Android Emülatör başlatılıyor<br/>Lütfen bekleyin: Bu bir ya da iki dakika alabilir.";
    Blockly.Msg.REPL_CONNECTING = "Bağlanılıyor...";
    Blockly.Msg.REPL_CANCEL = "İptal Et";
    Blockly.Msg.REPL_GIVE_UP = "Pes Et";
    Blockly.Msg.REPL_KEEP_TRYING = "Denemeye Devam Et";
    Blockly.Msg.REPL_CONNECTION_FAILURE1 = "Bağlantı Hatası";
    Blockly.Msg.REPL_NO_START_EMULATOR = "Emülatör ile Kodular Eşlikçi'sini başlatamadık";
    Blockly.Msg.REPL_PLUGGED_IN_Q = "Takılı Mı?";
    Blockly.Msg.REPL_AI_NO_SEE_DEVICE = "Kodular cihazınızı görmüyor, kablonun takılı olduğundan ve sürücülerin doğru olduğundan emin olun.";
    Blockly.Msg.REPL_HELPER_Q = "Yardımcı?";
    Blockly.Msg.REPL_HELPER_NOT_RUNNING = 'Kodular Başlatıcı çalışıyor gibi gözükmüyor<br /><a href="https://starter.kodular.io" target="_blank">Yardım mı lazım?</a>';
    Blockly.Msg.REPL_USB_CONNECTED_WAIT = "USB Bağlandı, bekleniyor ";
    Blockly.Msg.REPL_SECONDS_ENSURE_RUNNING = " saniye kaldı her şeyin çalıştığından emin olması için.";
    Blockly.Msg.REPL_EMULATOR_STARTED = "Emülatör başlatıldı, bekleniyor ";
    Blockly.Msg.REPL_STARTING_COMPANION_ON_PHONE = "Bağlanılan telefonda Eşlikçi uygulaması başlatılıyor.";
    Blockly.Msg.REPL_STARTING_COMPANION_IN_EMULATOR = "Emülatördeki Eşlikçi uygulaması başlatılıyor.";
    Blockly.Msg.REPL_COMPANION_STARTED_WAITING = "Eşlikçi başlatıldı, bekleniyor ";
    Blockly.Msg.REPL_VERIFYING_COMPANION = "Eşlikçi'nin başlatıldığı doğrulanıyor....";
    Blockly.Msg.REPL_CONNECT_TO_COMPANION = "Eşlikçiye Bağlan";
    Blockly.Msg.REPL_TRY_AGAIN1 = "Kodular Eşlikçisi'ne bağlanmada sorun yaşandı, tekrar deneyin.";
    Blockly.Msg.REPL_YOUR_CODE_IS = "Kodunuz";
    Blockly.Msg.REPL_DO_YOU_REALLY_Q = "Gerçekten mi?";
    Blockly.Msg.REPL_FACTORY_RESET = 'Bu emülatörü "fabrika" durumuna sıfırlayacaktır. Eğer emülatörde daha önceden Eşlikçi\'yi güncellediyseniz, bunu tekrardan yapmalısınız.';
    Blockly.Msg.REPL_WEBRTC_CONNECTION_ERROR = "Eşlikçi Bağlantı Hatası";
    Blockly.Msg.REPL_EMULATOR_ONLY = 'Bu özelliği sadece Emülatörü güncellemek için kullanabilirsiniz';

// Messages from Blockly.js
    Blockly.Msg.WARNING_DELETE_X_BLOCKS = "Bu %1 bloğun hepsini silmek istediğinizden emin misiniz?";

// Blocklyeditor.js
    Blockly.Msg.GENERATE_YAIL = "Yail oluştur";
    Blockly.Msg.DO_IT = "Yaptır";
    Blockly.Msg.DO_IT_DISCONNECTED = 'Yaptır (Eşlikçi bağlanmadı)';
    Blockly.Msg.CLEAR_DO_IT_ERROR = "Hatayı Temizle";
    Blockly.Msg.CAN_NOT_DO_IT = "Yaptırılamıyor";
    Blockly.Msg.CONNECT_TO_DO_IT = '"Yaptır" özelliğini kullanmak için bir eşilkçiye veya emülatöre bağlı olmanız gerekir.';

// Clock Component Menu Items
    Blockly.Msg.TIME_YEARS = "Yıl";
    Blockly.Msg.TIME_MONTHS = "Ay";
    Blockly.Msg.TIME_WEEKS = "Hafta";
    Blockly.Msg.TIME_DAYS = "Gün";
    Blockly.Msg.TIME_HOURS = "Saat";
    Blockly.Msg.TIME_MINUTES = "Dakika";
    Blockly.Msg.TIME_SECONDS = "Saniye";
    Blockly.Msg.TIME_DURATION = "Süre";

    // Connection Dialog Messages
    Blockly.Msg.DIALOG_RENDEZVOUS_NEGOTIATING = "15 Rendezvous (lütfen bekleyin)";
    Blockly.Msg.DIALOG_SECURE_ESTABLISHING = "20 Güvenli Bağlantı Kuruluyor";
    Blockly.Msg.DIALOG_SECURE_ESTABLISHED = "30 Güvenli Bağlantı Sağlandı";
    Blockly.Msg.DIALOG_FOUND_COMPANION = "10 Eşlikçi Bulundu";

    //Blockly.Util.Dialog Messages
    Blockly.Msg.DIALOG_UNBOUND_VAR = 'Bağsız Değişkenler';
    Blockly.Msg.DIALOG_SUBMIT = 'Gönder';
    Blockly.Msg.DIALOG_ENTER_VALUES = 'Şunun için değeri girin:';
  }
};

// Initalize language definition to Turkish
Blockly.Msg.tr.switch_blockly_language_to_tr.init();
Blockly.Msg.tr.switch_language_to_turkish.init();
