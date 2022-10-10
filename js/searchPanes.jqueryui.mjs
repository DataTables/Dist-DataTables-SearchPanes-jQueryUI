
/*! Bootstrap integration for DataTables' SearchPanes
 * © SpryMedia Ltd - datatables.net/license
 */

import $ from 'jquery';
import DataTable from 'datatables.net-ju';
import DataTable from 'datatables.net-searchpanes';


$.extend(true, DataTable.SearchPane.classes, {
    disabledButton: 'dtsp-paneInputButton dtsp-disabledButton',
    paneButton: 'dtsp-paneButton ui-button',
    topRow: 'dtsp-topRow ui-state-default'
});
$.extend(true, DataTable.SearchPanes.classes, {
    clearAll: 'dtsp-clearAll ui-button',
    collapseAll: 'dtsp-collapseAll ui-button',
    container: 'dtsp-searchPanes',
    panes: 'dtsp-panesContainer fg-toolbar ui-toolbar ui-widget-header',
    showAll: 'dtsp-showAll ui-button'
});


export default DataTable;
