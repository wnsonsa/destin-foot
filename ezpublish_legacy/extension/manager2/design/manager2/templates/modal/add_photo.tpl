<!-- Modal -->
<div id="addPhoto" class="modal fade" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Publier une photo/vidéo</h4>
            </div>
            <div class="modal-body">
                <div class="alert alert-danger" style="display:none">
                    <button type="button" class="close" data-dismiss="alert">X—</button>
                    <strong></strong>
                </div>
                <div class="alert alert-success" style="display:none">
                    <button type="button" class="close" data-dismiss="alert">X—</button>
                    <strong></strong>
                </div>
                <form name="formPhoto" id="formPhoto" method="post" enctype="multipart/form-data" action="/add/photo" data-toggle="validator" role="form">
                    <input type="hidden" name="parent_node_id" value="{$current_node_id}" />
                    <input type="hidden" name="MAX_FILE_SIZE" value="2048000" />
                    <div class="form-group">
                        <label for="titrePhoto">Titre:</label>
                        <input type="text" name="titrePhoto" class="form-control required" id="titrePhoto" data-error="ce champs est obligatoire" value="" required>
                    </div>
                    <div class="form-group">
                        <label for="photo">Photo/vidéo:</label>
                        <input type="file" name="photo" class="form-control required" id="photo" data-error="ce champs est obligatoire" value="" required>
                    </div>
                    <div class="form-group">
                        <label for="description">Description:</label>
                        <textarea class="form-control" name="descriptionPhoto" rows="3" id="description"></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button id="sendPhoto" type="submit" class="btn btn-primary" onclick="$('#formPhoto').submit();">valider</button>
                <button type="button" class="btn btn-default close" data-dismiss="modal">close</button>
            </div>
        </div>

    </div>
</div>