<div class="page-header">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-lg-12">
                {if $error}
                    <p class="alert alert-danger">{$error}</p>
                {elseif $login}
                    <p class="alert alert-success">SUPER</p>
                {/if}
            </div>
        </div>
    </div>
    <!-- PAGE-HEADER-->
</div>
<div class="container">
    <div class="row">
        <form data-toggle="validator" class="form-horizontal well" id="form-login" name="form-login" action={'/profil/login'|ezurl} method="post" enctype="multipart/form-data" role="form">
            <input type="hidden" name="login" value="true">
            <div class="form-group">
                <label for="login" class="col-sm-2 control-label">Login*</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control" id="username" name="username" placeholder="Notilisateurm U" data-error="vous devez remplir ce champ" value="{if is_set($post.username)}{$post.username}{/if}" required>
                </div>
            </div>
            <div class="form-group">
                <label for="password" class="col-sm-2 control-label">Mot de passe</label>
                <div class="col-sm-6">
                    <input type="password" class="form-control" id="password" name="password" placeholder="Mot de passe" data-minlength="6" data-error="vous devez remplir ce champ" value="" required>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label"></label>
                <div class="col-sm-6">
                    <button type="submit" class="btn btn-lg btn-primary pull-right">Se Connecter</button>
                </div>
            </div>
        </form>
    </div>
</div>