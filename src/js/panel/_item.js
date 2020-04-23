import TableSelect from '../helpers/TableSelect';

;$(function() {

    (new TableSelect($('table.table')))
        .onChange(function(elem, checked) {
            if (checked) {
                $('.tabs-content__list[data-tab="main"]').find('form').eq(0).append('<input type="hidden" name="vin[' + elem.data('id') + ']" value="' + elem.data('vin') + '">');
                $('.tabs-content__list[data-tab="main"]').find('form').eq(1).append('<input type="hidden" name="vin[' + elem.data('id') + ']" value="' + elem.data('vin') + '">');
            } else {
                $('.tabs-content__list[data-tab="main"]').find('form').eq(0).find('input[name="vin[' + elem.data('id') + ']"]').remove();
                $('.tabs-content__list[data-tab="main"]').find('form').eq(1).find('input[name="vin[' + elem.data('id') + ']"]').remove();
            }
        });

});