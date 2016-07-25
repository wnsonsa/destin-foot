<div class="page-header">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-lg-12">
                {if is_set($error)}
                    <p class="alert alert-danger">{if is_set($error)}{$error}{/if}</p>
                {elseif $create}
                    <p class="alert alert-success">SUPER</p>
                {/if}
            </div>
        </div>
    </div>
    <!-- PAGE-HEADER-->
</div>

<div class="container">
    <div class="row">
        <form data-toggle="validator" class="form-horizontal well" id="form-register" name="form-register" action={'/profil/creer'|ezurl} method="post" enctype="multipart/form-data" role="form">
            <input type="hidden" name="register" value="true">
            <div class="form-group">
                <label for="profil" class="col-sm-2 control-label">Profil*</label>
                <div class="col-sm-6">
                    <select id="profil" name="profil" class="form-control" required>
                        <option value="">Choisir son profil</option>
                        <option value="joueur"{if and(is_set($post.profil),eq($post.profil,'joueur'))} selected="selected"{/if}>Joueur</option>
                        <option value="recruteur"{if and(is_set($post.profil),eq($post.profil,'recruteur'))} selected="selected"{/if}>Recruteur</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="nom" class="col-sm-2 control-label">Nom*</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control" id="nom" name="nom" placeholder="Nom" data-error="vous devez remplir ce champ" value="{if is_set($post.nom)}{$post.nom}{/if}" required>
                </div>
            </div>
            <div class="form-group">
                <label for="prenom" class="col-sm-2 control-label">Prénom*</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control" id="prenom" name="prenom" placeholder="Prénom" data-error="vous devez remplir ce champ" value="{if is_set($post.prenom)}{$post.prenom}{/if}" required>
                </div>
            </div>
            <div class="form-group">
                <label for="dateNaissance" class="col-sm-2 control-label">Date de naissance*</label>
                <div class="col-sm-6">
                    <input type="date" class="form-control" id="dateNaissance" name="dateNaissance" placeholder="__/__/___" data-error="vous devez remplir ce champ" value="{if is_set($post.dateNaissance)}{$post.dateNaissance}{/if}" required>
                </div>
            </div>
            <div class="form-group">
                <label for="region" class="col-sm-2 control-label">Région*</label>
                <div class="col-sm-6">
                    <select id="region" name="region" class="form-control" data-error="vous devez remplir ce champ" required>
                        <option value="">Choisir sa région</option>
                        <option value="Alsace-Champagne-Ardenne-Lorraine"{if and(is_set($post.region),eq($post.region,'Alsace-Champagne-Ardenne-Lorraine'))} selected="selected"{/if}>Alsace-Champagne-Ardenne-Lorraine</option>
                        <option value="Aquitaine-Limousin-Poitou-Charentes"{if and(is_set($post.region),eq($post.region,'Aquitaine-Limousin-Poitou-Charentes'))} selected="selected"{/if}>Aquitaine-Limousin-Poitou-Charentes</option>
                        <option value="Auvergne-Rhône-Alpes"{if and(is_set($post.region),eq($post.region,'Auvergne-Rhône-Alpes'))} selected="selected"{/if}>Auvergne-Rhône-Alpes</option>
                        <option value="Bourgogne-Franche-Comté"{if and(is_set($post.region),eq($post.region,'Bourgogne-Franche-Comté'))} selected="selected"{/if}>Bourgogne-Franche-Comté</option>
                        <option value="Bretagne"{if and(is_set($post.region),eq($post.region,'Bretagne'))} selected="selected"{/if}>Bretagne</option>
                        <option value="Centre-Val de Loire"{if and(is_set($post.region),eq($post.region,'Centre-Val de Loire'))} selected="selected"{/if}>Centre-Val de Loire</option>
                        <option value="Corse"{if and(is_set($post.region),eq($post.region,'ACorse'))} selected="selected"{/if}>Corse</option>
                        <option value="Guadeloupe"{if and(is_set($post.region),eq($post.region,'Guadeloupe'))} selected="selected"{/if}>Guadeloupe</option>
                        <option value="Guyane"{if and(is_set($post.region),eq($post.region,'Guyane'))} selected="selected"{/if}>Guyane</option>
                        <option value="Île-de-France"{if and(is_set($post.region),eq($post.region,'Île-de-France'))} selected="selected"{/if}>Île-de-France</option>
                        <option value="La Réunion"{if and(is_set($post.region),eq($post.region,'La Réunion'))} selected="selected"{/if}>La Réunion</option>
                        <option value="Languedoc-Roussillon-Midi-Pyrénées"{if and(is_set($post.region),eq($post.region,'Languedoc-Roussillon-Midi-Pyrénées'))} selected="selected"{/if}>Languedoc-Roussillon-Midi-Pyrénées</option>
                        <option value="Martinique"{if and(is_set($post.region),eq($post.region,'Martinique'))} selected="selected"{/if}>Martinique</option>
                        <option value="Mayotte"{if and(is_set($post.region),eq($post.region,'Mayotte'))} selected="selected"{/if}>Mayotte</option>
                        <option value="Nord-Pas-de-Calais-Picardie"{if and(is_set($post.region),eq($post.region,'Nord-Pas-de-Calais-Picardie'))} selected="selected"{/if}>Nord-Pas-de-Calais-Picardie</option>
                        <option value="Normandie"{if and(is_set($post.region),eq($post.region,'Normandie'))} selected="selected"{/if}>Normandie</option>
                        <option value="Pays de la Loire"{if and(is_set($post.region),eq($post.region,'Pays de la Loire'))} selected="selected"{/if}>Pays de la Loire</option>
                        <option value="Provence-Alpes-Côte d'Azur"{if and(is_set($post.region),eq($post.region,"Provence-Alpes-Côte d'Azur"))} selected="selected"{/if}>Provence-Alpes-Côte d'Azur</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="photo" class="col-sm-2 control-label">Photo*</label>
                <div class="col-sm-6">
                    <input type="file" class="form-control" id="photo" name="photo" placeholder="Photo" data-error="vous devez remplir ce champ" value="{if is_set($post.photo)}{$post.photo}{/if}" required>
                </div>
            </div>
            <hr>
            <div class="form-group">
                <label for="email" class="col-sm-2 control-label">Email*</label>
                <div class="col-sm-6">
                    <input type="email" class="form-control" id="email" name="email" placeholder="Email" data-error="vous devez remplir ce champ" value="{if is_set($post.email)}{$post.email}{/if}" required>
                </div>
            </div>
            <div class="form-group">
                <label for="login" class="col-sm-2 control-label">Login*</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control" id="login" name="login" placeholder="Pseudo" data-error="vous devez remplir ce champ" value="{if is_set($post.login)}{$post.login}{/if}" required>
                </div>
            </div>
            <div class="form-group">
                <label for="password1" class="col-sm-2 control-label">Mot de passe*</label>
                <div class="col-sm-6">
                    <input type="password" class="form-control" id="password1" name="password1" placeholder="Mot de passe" data-error="vous devez remplir ce champ" data-minlength="6" value="{if is_set($post.password1)}{$post.password1}{/if}" required>
                    <div class="help-block">6 caractères minimum</div>
                </div>
            </div>
            <div class="form-group">
                <label for="password2" class="col-sm-2 control-label">Confirmation mot de passe</label>
                <div class="col-sm-6">
                    <input type="password" class="form-control" id="password2" name="password2" placeholder="confirmation" data-match="#password1" data-match-error="oula, les mots de passe sont diférent" data-minlength="6" value="{if is_set($post.password2)}{$post.password2}{/if}" required>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label"></label>
                <div class="col-sm-6">
                    <button type="submit" class="btn btn-lg btn-primary pull-right">Créer son compte</button>
                </div>
            </div>
        </form>
    </div>
</div>



