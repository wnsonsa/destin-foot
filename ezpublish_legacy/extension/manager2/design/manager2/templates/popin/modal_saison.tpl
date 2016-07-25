<div class="modal" id="modal-display-saisons" role="dialog" aria-labelledby="Display Saisons" aria-hidden="true" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                    <span aria-hidden="true">×</span><span class="sr-only">Close</span>
                </button>
                <h2 class="modal-title">Les saisons</h2>
            </div>

            <div class="modal-body">
                {if count($saisons)|gt(0)}
                    {foreach $saisons as $saison}
                        <p><strong>saison: </strong>{$saison.data_map.saison.content}</p>
                        <p><strong>club: </strong>{$saison.data_map.club.content}</p>
                        <p><strong>categorie: </strong>{$saison.data_map.categorie.content}</p>
                        <p><strong>division: </strong>{$saison.data_map.division.content}</p>
                        <p><strong>poste: </strong>{$saison.data_map.poste.content}</p>
                        <p><strong>coach: </strong>{$saison.data_map.coach.content}</p>
                        <p><strong>selection: </strong>{$saison.data_map.selection.content}</p>
                        <p><strong>palmares: </strong>{$saison.data_map.palmares.content}</p>
                        <hr>
                    {/foreach}
                {/if}

            </div>

            <div class="modal-footer">

            </div>
        </div>
    </div>
</div>