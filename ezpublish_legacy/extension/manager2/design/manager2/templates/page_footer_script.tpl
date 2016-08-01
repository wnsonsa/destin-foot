{* Override this template and place javascript based statestics here (like Google Analytics) *}
{* Load JavaScript dependencys + JavaScriptList *}
{ezscript_load( array( ezini( 'JavaScriptSettings', 'JavaScriptFooterList', 'design.ini' )) )}
{include uri='design:modal/add_photo.tpl' current_node_id=$current_node_id}