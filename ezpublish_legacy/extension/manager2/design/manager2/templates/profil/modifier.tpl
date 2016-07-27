{set-block scope=root variable=cache_ttl}-1{/set-block}
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
        <div class="visible-md visible-lg col-sm-4 col-lg-12">
            <div class="well">
                <form data-toggle="validator" class="form-horizontal well" id="form-modify" name="form-modify"
                      action={'/profil/modifier'|ezurl} method="post" enctype="multipart/form-data" role="form">
                    <div class="tabbable">
                        <ul class="nav nav-tabs">
                            <li class="active"><a href="#1" data-toggle="tab">Identité</a></li>
                            <li><a href="#4" data-toggle="tab">Parcours sportif/clubs</a></li>
                            <li><a href="#2" data-toggle="tab">Média</a></li>
                            <li><a href="#3" data-toggle="tab">Réseaux sociaux</a></li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane active" id="1">
                                <input type="hidden" name="modify" value="true">
                                <div class="form-group">
                                    <label for="nom" class="col-sm-2 control-label">Nom*</label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" id="nom" name="nom" placeholder="Nom"
                                               data-error="vous devez remplir ce champ"
                                               value="{if is_set($attributesForm.nom)}{$attributesForm.nom}{/if}"
                                               required>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="prenom" class="col-sm-2 control-label">Prénom*</label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" id="prenom" name="prenom"
                                               placeholder="Prénom" data-error="vous devez remplir ce champ"
                                               value="{if is_set($attributesForm.prenom)}{$attributesForm.prenom}{/if}"
                                               required>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="dateNaissance" class="col-sm-2 control-label">Date de naissance*</label>
                                    <div class="col-sm-6">
                                        <input type="date" class="form-control" id="dateNaissance" name="dateNaissance"
                                               placeholder="__/__/___" data-error="vous devez remplir ce champ"
                                               value="{if is_set($attributesForm.dateNaissance)}{$attributesForm.dateNaissance}{/if}"
                                               required>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="taille" class="col-sm-2 control-label">Taille*</label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" id="taille" name="taille"
                                               placeholder="Taille en cm" data-error="vous devez remplir ce champ"
                                               value="{if is_set($attributesForm.taille)}{$attributesForm.taille}{/if}"
                                               required>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="poids" class="col-sm-2 control-label">Poids*</label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" id="poids" name="poids"
                                               placeholder="Poids en kg" data-error="vous devez remplir ce champ"
                                               value="{if is_set($attributesForm.poids)}{$attributesForm.poids}{/if}"
                                               required>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="region" class="col-sm-2 control-label">Région*</label>
                                    <div class="col-sm-6">
                                        <select id="region" name="region" class="form-control"
                                                data-error="vous devez remplir ce champ" required>
                                            <option value="">Choisir sa région</option>
                                            <option value="Alsace-Champagne-Ardenne-Lorraine"{if and(is_set($attributesForm.region),eq($attributesForm.region,'Alsace-Champagne-Ardenne-Lorraine'))} selected="selected"{/if}>
                                                Alsace-Champagne-Ardenne-Lorraine
                                            </option>
                                            <option value="Aquitaine-Limousin-Poitou-Charentes"{if and(is_set($attributesForm.region),eq($attributesForm.region,'Aquitaine-Limousin-Poitou-Charentes'))} selected="selected"{/if}>
                                                Aquitaine-Limousin-Poitou-Charentes
                                            </option>
                                            <option value="Auvergne-Rhône-Alpes"{if and(is_set($attributesForm.region),eq($attributesForm.region,'Auvergne-Rhône-Alpes'))} selected="selected"{/if}>
                                                Auvergne-Rhône-Alpes
                                            </option>
                                            <option value="Bourgogne-Franche-Comté"{if and(is_set($attributesForm.region),eq($attributesForm.region,'Bourgogne-Franche-Comté'))} selected="selected"{/if}>
                                                Bourgogne-Franche-Comté
                                            </option>
                                            <option value="Bretagne"{if and(is_set($attributesForm.region),eq($attributesForm.region,'Bretagne'))} selected="selected"{/if}>
                                                Bretagne
                                            </option>
                                            <option value="Centre-Val de Loire"{if and(is_set($attributesForm.region),eq($attributesForm.region,'Centre-Val de Loire'))} selected="selected"{/if}>
                                                Centre-Val de Loire
                                            </option>
                                            <option value="Corse"{if and(is_set($attributesForm.region),eq($attributesForm.region,'ACorse'))} selected="selected"{/if}>
                                                Corse
                                            </option>
                                            <option value="Guadeloupe"{if and(is_set($attributesForm.region),eq($attributesForm.region,'Guadeloupe'))} selected="selected"{/if}>
                                                Guadeloupe
                                            </option>
                                            <option value="Guyane"{if and(is_set($attributesForm.region),eq($attributesForm.region,'Guyane'))} selected="selected"{/if}>
                                                Guyane
                                            </option>
                                            <option value="Île-de-France"{if and(is_set($attributesForm.region),eq($attributesForm.region,'Île-de-France'))} selected="selected"{/if}>
                                                Île-de-France
                                            </option>
                                            <option value="La Réunion"{if and(is_set($attributesForm.region),eq($attributesForm.region,'La Réunion'))} selected="selected"{/if}>
                                                La Réunion
                                            </option>
                                            <option value="Languedoc-Roussillon-Midi-Pyrénées"{if and(is_set($attributesForm.region),eq($attributesForm.region,'Languedoc-Roussillon-Midi-Pyrénées'))} selected="selected"{/if}>
                                                Languedoc-Roussillon-Midi-Pyrénées
                                            </option>
                                            <option value="Martinique"{if and(is_set($attributesForm.region),eq($attributesForm.region,'Martinique'))} selected="selected"{/if}>
                                                Martinique
                                            </option>
                                            <option value="Mayotte"{if and(is_set($attributesForm.region),eq($attributesForm.region,'Mayotte'))} selected="selected"{/if}>
                                                Mayotte
                                            </option>
                                            <option value="Nord-Pas-de-Calais-Picardie"{if and(is_set($attributesForm.region),eq($attributesForm.region,'Nord-Pas-de-Calais-Picardie'))} selected="selected"{/if}>
                                                Nord-Pas-de-Calais-Picardie
                                            </option>
                                            <option value="Normandie"{if and(is_set($attributesForm.region),eq($attributesForm.region,'Normandie'))} selected="selected"{/if}>
                                                Normandie
                                            </option>
                                            <option value="Pays de la Loire"{if and(is_set($attributesForm.region),eq($attributesForm.region,'Pays de la Loire'))} selected="selected"{/if}>
                                                Pays de la Loire
                                            </option>
                                            <option value="Provence-Alpes-Côte d'Azur"{if and(is_set($attributesForm.region),eq($attributesForm.region,"Provence-Alpes-Côte d'Azur"))} selected="selected"{/if}>
                                                Provence-Alpes-Côte d'Azur
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="nationalite" class="col-sm-2 control-label">Nationalité</label>
                                    <div class="col-sm-6">
                                        <select id="nationalite" name="nationalite" class="form-control"
                                                data-error="vous devez remplir ce champ">
                                            <option value="">Choisir sa nationalité</option>
                                            <option value='Afghane' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Afghane"))} selected="selected"{/if}>
                                                Afghane
                                            </option>
                                            <option value='Albanaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Albanaise"))} selected="selected"{/if}>
                                                Albanaise
                                            </option>
                                            <option value='Algerienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Algerienne"))} selected="selected"{/if}>
                                                Algerienne
                                            </option>
                                            <option value='Allemande' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Allemande"))} selected="selected"{/if}>
                                                Allemande
                                            </option>
                                            <option value='Americaine' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Americaine"))} selected="selected"{/if}>
                                                Americaine
                                            </option>
                                            <option value='Andorrane' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Andorrane"))} selected="selected"{/if}>
                                                Andorrane
                                            </option>
                                            <option value='Angolaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Angolaise"))} selected="selected"{/if}>
                                                Angolaise
                                            </option>
                                            <option value='Antiguaise et barbudienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Antiguaise et barbudienne"))} selected="selected"{/if}>
                                                Antiguaise et barbudienne
                                            </option>
                                            <option value='Argentine' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Argentine"))} selected="selected"{/if}>
                                                Argentine
                                            </option>
                                            <option value='Armenienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Armenienne"))} selected="selected"{/if}>
                                                Armenienne
                                            </option>
                                            <option value='Australienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Australienne"))} selected="selected"{/if}>
                                                Australienne
                                            </option>
                                            <option value='Autrichienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Autrichienne"))} selected="selected"{/if}>
                                                Autrichienne
                                            </option>
                                            <option value='Azerbaïdjanaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Azerbaïdjanaise"))} selected="selected"{/if}>
                                                Azerbaïdjanaise
                                            </option>
                                            <option value='Bahamienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Bahamienne"))} selected="selected"{/if}>
                                                Bahamienne
                                            </option>
                                            <option value='Bahreinienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Bahreinienne"))} selected="selected"{/if}>
                                                Bahreinienne
                                            </option>
                                            <option value='Bangladaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Bangladaise"))} selected="selected"{/if}>
                                                Bangladaise
                                            </option>
                                            <option value='Barbadienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Barbadienne"))} selected="selected"{/if}>
                                                Barbadienne
                                            </option>
                                            <option value='Belge' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Belge"))} selected="selected"{/if}>
                                                Belge
                                            </option>
                                            <option value='Belizienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Belizienne"))} selected="selected"{/if}>
                                                Belizienne
                                            </option>
                                            <option value='Beninoise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Beninoise"))} selected="selected"{/if}>
                                                Beninoise
                                            </option>
                                            <option value='Bhoutanaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Bhoutanaise"))} selected="selected"{/if}>
                                                Bhoutanaise
                                            </option>
                                            <option value='Bielorusse' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Bielorusse"))} selected="selected"{/if}>
                                                Bielorusse
                                            </option>
                                            <option value='Birmane' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Birmane"))} selected="selected"{/if}>
                                                Birmane
                                            </option>
                                            <option value='Bissau-Guinéenne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Bissau-Guinéenne"))} selected="selected"{/if}>
                                                Bissau-Guinéenne
                                            </option>
                                            <option value='Bolivienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Bolivienne"))} selected="selected"{/if}>
                                                Bolivienne
                                            </option>
                                            <option value='Bosnienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Bosnienne"))} selected="selected"{/if}>
                                                Bosnienne
                                            </option>
                                            <option value='Botswanaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Botswanaise"))} selected="selected"{/if}>
                                                Botswanaise
                                            </option>
                                            <option value='Bresilienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Bresilienne"))} selected="selected"{/if}>
                                                Bresilienne
                                            </option>
                                            <option value='Britannique' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Britannique"))} selected="selected"{/if}>
                                                Britannique
                                            </option>
                                            <option value='Bruneienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Bruneienne"))} selected="selected"{/if}>
                                                Bruneienne
                                            </option>
                                            <option value='Bulgare' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Bulgare"))} selected="selected"{/if}>
                                                Bulgare
                                            </option>
                                            <option value='Burkinabe' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Burkinabe"))} selected="selected"{/if}>
                                                Burkinabe
                                            </option>
                                            <option value='Burundaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Burundaise"))} selected="selected"{/if}>
                                                Burundaise
                                            </option>
                                            <option value='Cambodgienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Cambodgienne"))} selected="selected"{/if}>
                                                Cambodgienne
                                            </option>
                                            <option value='Camerounaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Camerounaise"))} selected="selected"{/if}>
                                                Camerounaise
                                            </option>
                                            <option value='Canadienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Canadienne"))} selected="selected"{/if}>
                                                Canadienne
                                            </option>
                                            <option value='Cap-verdienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Cap-verdienne"))} selected="selected"{/if}>
                                                Cap-verdienne
                                            </option>
                                            <option value='Centrafricaine' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Centrafricaine"))} selected="selected"{/if}>
                                                Centrafricaine
                                            </option>
                                            <option value='Chilienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Chilienne"))} selected="selected"{/if}>
                                                Chilienne
                                            </option>
                                            <option value='Chinoise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Chinoise"))} selected="selected"{/if}>
                                                Chinoise
                                            </option>
                                            <option value='Chypriote' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Chypriote"))} selected="selected"{/if}>
                                                Chypriote
                                            </option>
                                            <option value='Colombienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Colombienne"))} selected="selected"{/if}>
                                                Colombienne
                                            </option>
                                            <option value='Comorienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Comorienne"))} selected="selected"{/if}>
                                                Comorienne
                                            </option>
                                            <option value='Congolaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Congolaise"))} selected="selected"{/if}>
                                                Congolaise
                                            </option>
                                            <option value='Costaricaine' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Costaricaine"))} selected="selected"{/if}>
                                                Costaricaine
                                            </option>
                                            <option value='Croate' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Croate"))} selected="selected"{/if}>
                                                Croate
                                            </option>
                                            <option value='Cubaine' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Cubaine"))} selected="selected"{/if}>
                                                Cubaine
                                            </option>
                                            <option value='Danoise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Danoise"))} selected="selected"{/if}>
                                                Danoise
                                            </option>
                                            <option value='Djiboutienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Djiboutienne"))} selected="selected"{/if}>
                                                Djiboutienne
                                            </option>
                                            <option value='Dominicaine' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Dominicaine"))} selected="selected"{/if}>
                                                Dominicaine
                                            </option>
                                            <option value='Dominiquaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Dominiquaise"))} selected="selected"{/if}>
                                                Dominiquaise
                                            </option>
                                            <option value='Egyptienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Egyptienne"))} selected="selected"{/if}>
                                                Egyptienne
                                            </option>
                                            <option value='Emirienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Emirienne"))} selected="selected"{/if}>
                                                Emirienne
                                            </option>
                                            <option value='Equato-guineenne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Equato-guineenne"))} selected="selected"{/if}>
                                                Equato-guineenne
                                            </option>
                                            <option value='Equatorienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Equatorienne"))} selected="selected"{/if}>
                                                Equatorienne
                                            </option>
                                            <option value='Erythreenne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Erythreenne"))} selected="selected"{/if}>
                                                Erythreenne
                                            </option>
                                            <option value='Espagnole' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Espagnole"))} selected="selected"{/if}>
                                                Espagnole
                                            </option>
                                            <option value='Est-timoraise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Est-timoraise"))} selected="selected"{/if}>
                                                Est-timoraise
                                            </option>
                                            <option value='Estonienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Estonienne"))} selected="selected"{/if}>
                                                Estonienne
                                            </option>
                                            <option value='Ethiopienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Ethiopienne"))} selected="selected"{/if}>
                                                Ethiopienne
                                            </option>
                                            <option value='Fidjienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Fidjienne"))} selected="selected"{/if}>
                                                Fidjienne
                                            </option>
                                            <option value='Finlandaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Finlandaise"))} selected="selected"{/if}>
                                                Finlandaise
                                            </option>
                                            <option value='Française' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Française"))} selected="selected"{/if}>
                                                Française
                                            </option>
                                            <option value='Gabonaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Gabonaise"))} selected="selected"{/if}>
                                                Gabonaise
                                            </option>
                                            <option value='Gambienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Gambienne"))} selected="selected"{/if}>
                                                Gambienne
                                            </option>
                                            <option value='Georgienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Georgienne"))} selected="selected"{/if}>
                                                Georgienne
                                            </option>
                                            <option value='Ghaneenne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Ghaneenne"))} selected="selected"{/if}>
                                                Ghaneenne
                                            </option>
                                            <option value='Grenadienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Grenadienne"))} selected="selected"{/if}>
                                                Grenadienne
                                            </option>
                                            <option value='Guatemalteque' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Guatemalteque"))} selected="selected"{/if}>
                                                Guatemalteque
                                            </option>
                                            <option value='Guineenne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Guineenne"))} selected="selected"{/if}>
                                                Guineenne
                                            </option>
                                            <option value='Guyanienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Guyanienne"))} selected="selected"{/if}>
                                                Guyanienne
                                            </option>
                                            <option value='Haïtienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Haïtienne"))} selected="selected"{/if}>
                                                Haïtienne
                                            </option>
                                            <option value='Hellenique' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Hellenique"))} selected="selected"{/if}>
                                                Hellenique
                                            </option>
                                            <option value='Hondurienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Hondurienne"))} selected="selected"{/if}>
                                                Hondurienne
                                            </option>
                                            <option value='Hongroise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Hongroise"))} selected="selected"{/if}>
                                                Hongroise
                                            </option>
                                            <option value='Indienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Indienne"))} selected="selected"{/if}>
                                                Indienne
                                            </option>
                                            <option value='Indonesienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Indonesienne"))} selected="selected"{/if}>
                                                Indonesienne
                                            </option>
                                            <option value='Irakienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Irakienne"))} selected="selected"{/if}>
                                                Irakienne
                                            </option>
                                            <option value='Irlandaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Irlandaise"))} selected="selected"{/if}>
                                                Irlandaise
                                            </option>
                                            <option value='Islandaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Islandaise"))} selected="selected"{/if}>
                                                Islandaise
                                            </option>
                                            <option value='Israélienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Israélienne"))} selected="selected"{/if}>
                                                Israélienne
                                            </option>
                                            <option value='Italienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Italienne"))} selected="selected"{/if}>
                                                Italienne
                                            </option>
                                            <option value='Ivoirienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Ivoirienne"))} selected="selected"{/if}>
                                                Ivoirienne
                                            </option>
                                            <option value='Jamaïcaine' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Jamaïcaine"))} selected="selected"{/if}>
                                                Jamaïcaine
                                            </option>
                                            <option value='Japonaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Japonaise"))} selected="selected"{/if}>
                                                Japonaise
                                            </option>
                                            <option value='Jordanienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Jordanienne"))} selected="selected"{/if}>
                                                Jordanienne
                                            </option>
                                            <option value='Kazakhstanaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Kazakhstanaise"))} selected="selected"{/if}>
                                                Kazakhstanaise
                                            </option>
                                            <option value='Kenyane' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Kenyane"))} selected="selected"{/if}>
                                                Kenyane
                                            </option>
                                            <option value='Kirghize' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Kirghize"))} selected="selected"{/if}>
                                                Kirghize
                                            </option>
                                            <option value='Kiribatienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Kiribatienne"))} selected="selected"{/if}>
                                                Kiribatienne
                                            </option>
                                            <option value='Kittitienne-et-nevicienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Kittitienne-et-nevicienne"))} selected="selected"{/if}>
                                                Kittitienne-et-nevicienne
                                            </option>
                                            <option value='Kossovienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Kossovienne"))} selected="selected"{/if}>
                                                Kossovienne
                                            </option>
                                            <option value='Koweitienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Koweitienne"))} selected="selected"{/if}>
                                                Koweitienne
                                            </option>
                                            <option value='Laotienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Laotienne"))} selected="selected"{/if}>
                                                Laotienne
                                            </option>
                                            <option value='Lesothane' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Lesothane"))} selected="selected"{/if}>
                                                Lesothane
                                            </option>
                                            <option value='Lettone' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Lettone"))} selected="selected"{/if}>
                                                Lettone
                                            </option>
                                            <option value='Libanaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Libanaise"))} selected="selected"{/if}>
                                                Libanaise
                                            </option>
                                            <option value='Liberienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Liberienne"))} selected="selected"{/if}>
                                                Liberienne
                                            </option>
                                            <option value='Libyenne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Libyenne"))} selected="selected"{/if}>
                                                Libyenne
                                            </option>
                                            <option value='Liechtensteinoise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Liechtensteinoise"))} selected="selected"{/if}>
                                                Liechtensteinoise
                                            </option>
                                            <option value='Lituanienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Lituanienne"))} selected="selected"{/if}>
                                                Lituanienne
                                            </option>
                                            <option value='Luxembourgeoise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Luxembourgeoise"))} selected="selected"{/if}>
                                                Luxembourgeoise
                                            </option>
                                            <option value='Macedonienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Macedonienne"))} selected="selected"{/if}>
                                                Macedonienne
                                            </option>
                                            <option value='Malaisienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Malaisienne"))} selected="selected"{/if}>
                                                Malaisienne
                                            </option>
                                            <option value='Malawienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Malawienne"))} selected="selected"{/if}>
                                                Malawienne
                                            </option>
                                            <option value='Maldivienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Maldivienne"))} selected="selected"{/if}>
                                                Maldivienne
                                            </option>
                                            <option value='Malgache' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Malgache"))} selected="selected"{/if}>
                                                Malgache
                                            </option>
                                            <option value='Malienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Malienne"))} selected="selected"{/if}>
                                                Malienne
                                            </option>
                                            <option value='Maltaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Maltaise"))} selected="selected"{/if}>
                                                Maltaise
                                            </option>
                                            <option value='Marocaine' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Marocaine"))} selected="selected"{/if}>
                                                Marocaine
                                            </option>
                                            <option value='Marshallaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Marshallaise"))} selected="selected"{/if}>
                                                Marshallaise
                                            </option>
                                            <option value='Mauricienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Mauricienne"))} selected="selected"{/if}>
                                                Mauricienne
                                            </option>
                                            <option value='Mauritanienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Mauritanienne"))} selected="selected"{/if}>
                                                Mauritanienne
                                            </option>
                                            <option value='Mexicaine' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Mexicaine"))} selected="selected"{/if}>
                                                Mexicaine
                                            </option>
                                            <option value='Micronesienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Micronesienne"))} selected="selected"{/if}>
                                                Micronesienne
                                            </option>
                                            <option value='Moldave' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Moldave"))} selected="selected"{/if}>
                                                Moldave
                                            </option>
                                            <option value='Monegasque' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Monegasque"))} selected="selected"{/if}>
                                                Monegasque
                                            </option>
                                            <option value='Mongole' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Mongole"))} selected="selected"{/if}>
                                                Mongole
                                            </option>
                                            <option value='Montenegrine' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Montenegrine"))} selected="selected"{/if}>
                                                Montenegrine
                                            </option>
                                            <option value='Mozambicaine' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Mozambicaine"))} selected="selected"{/if}>
                                                Mozambicaine
                                            </option>
                                            <option value='Namibienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Namibienne"))} selected="selected"{/if}>
                                                Namibienne
                                            </option>
                                            <option value='Nauruane' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Nauruane"))} selected="selected"{/if}>
                                                Nauruane
                                            </option>
                                            <option value='Neerlandaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Neerlandaise"))} selected="selected"{/if}>
                                                Neerlandaise
                                            </option>
                                            <option value='Neo-zelandaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Neo-zelandaise"))} selected="selected"{/if}>
                                                Neo-zelandaise
                                            </option>
                                            <option value='Nepalaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Nepalaise"))} selected="selected"{/if}>
                                                Nepalaise
                                            </option>
                                            <option value='Nicaraguayenne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Nicaraguayenne"))} selected="selected"{/if}>
                                                Nicaraguayenne
                                            </option>
                                            <option value='Nigeriane' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Nigeriane"))} selected="selected"{/if}>
                                                Nigeriane
                                            </option>
                                            <option value='Nigerienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Nigerienne"))} selected="selected"{/if}>
                                                Nigerienne
                                            </option>
                                            <option value='Nord-coréenne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Nord-coréenne"))} selected="selected"{/if}>
                                                Nord-coréenne
                                            </option>
                                            <option value='Norvegienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Norvegienne"))} selected="selected"{/if}>
                                                Norvegienne
                                            </option>
                                            <option value='Omanaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Omanaise"))} selected="selected"{/if}>
                                                Omanaise
                                            </option>
                                            <option value='Ougandaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Ougandaise"))} selected="selected"{/if}>
                                                Ougandaise
                                            </option>
                                            <option value='Ouzbeke' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Ouzbeke"))} selected="selected"{/if}>
                                                Ouzbeke
                                            </option>
                                            <option value='Pakistanaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Pakistanaise"))} selected="selected"{/if}>
                                                Pakistanaise
                                            </option>
                                            <option value='Palau' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Palau"))} selected="selected"{/if}>
                                                Palau
                                            </option>
                                            <option value='Palestinienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Palestinienne"))} selected="selected"{/if}>
                                                Palestinienne
                                            </option>
                                            <option value='Panameenne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Panameenne"))} selected="selected"{/if}>
                                                Panameenne
                                            </option>
                                            <option value='Papouane-neoguineenne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Papouane-neoguineenne"))} selected="selected"{/if}>
                                                Papouane-neoguineenne
                                            </option>
                                            <option value='Paraguayenne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Paraguayenne"))} selected="selected"{/if}>
                                                Paraguayenne
                                            </option>
                                            <option value='Peruvienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Peruvienne"))} selected="selected"{/if}>
                                                Peruvienne
                                            </option>
                                            <option value='Philippine' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Philippine"))} selected="selected"{/if}>
                                                Philippine
                                            </option>
                                            <option value='Polonaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Polonaise"))} selected="selected"{/if}>
                                                Polonaise
                                            </option>
                                            <option value='Portoricaine' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Portoricaine"))} selected="selected"{/if}>
                                                Portoricaine
                                            </option>
                                            <option value='Portugaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Portugaise"))} selected="selected"{/if}>
                                                Portugaise
                                            </option>
                                            <option value='Qatarienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Qatarienne"))} selected="selected"{/if}>
                                                Qatarienne
                                            </option>
                                            <option value='Roumaine' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Roumaine"))} selected="selected"{/if}>
                                                Roumaine
                                            </option>
                                            <option value='Russe' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Russe"))} selected="selected"{/if}>
                                                Russe
                                            </option>
                                            <option value='Rwandaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Rwandaise"))} selected="selected"{/if}>
                                                Rwandaise
                                            </option>
                                            <option value='Saint-lucienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Saint-lucienne"))} selected="selected"{/if}>
                                                Saint-lucienne
                                            </option>
                                            <option value='Saint-marinaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Saint-marinaise"))} selected="selected"{/if}>
                                                Saint-marinaise
                                            </option>
                                            <option value='Saint-vincentaise-et-grenadine' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Saint-vincentaise-et-grenadine
                                            "))} selected="selected"{/if}>
                                                Saint-vincentaise-et-grenadine
                                            </option>
                                            <option value='Salomonaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Salomonaise"))} selected="selected"{/if}>
                                                Salomonaise
                                            </option>
                                            <option value='Salvadorienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Salvadorienne"))} selected="selected"{/if}>
                                                Salvadorienne
                                            </option>
                                            <option value='Samoane' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Samoane"))} selected="selected"{/if}>
                                                Samoane
                                            </option>
                                            <option value='Santomeenne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Santomeenne"))} selected="selected"{/if}>
                                                Santomeenne
                                            </option>
                                            <option value='Saoudienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Saoudienne"))} selected="selected"{/if}>
                                                Saoudienne
                                            </option>
                                            <option value='Senegalaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Senegalaise"))} selected="selected"{/if}>
                                                Senegalaise
                                            </option>
                                            <option value='Serbe' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Serbe"))} selected="selected"{/if}>
                                                Serbe
                                            </option>
                                            <option value='Seychelloise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Seychelloise"))} selected="selected"{/if}>
                                                Seychelloise
                                            </option>
                                            <option value='Sierra-leonaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Sierra-leonaise"))} selected="selected"{/if}>
                                                Sierra-leonaise
                                            </option>
                                            <option value='Singapourienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Singapourienne"))} selected="selected"{/if}>
                                                Singapourienne
                                            </option>
                                            <option value='Slovaque' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Slovaque"))} selected="selected"{/if}>
                                                Slovaque
                                            </option>
                                            <option value='Slovene' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Slovene"))} selected="selected"{/if}>
                                                Slovene
                                            </option>
                                            <option value='Somalienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Somalienne"))} selected="selected"{/if}>
                                                Somalienne
                                            </option>
                                            <option value='Soudanaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Soudanaise"))} selected="selected"{/if}>
                                                Soudanaise
                                            </option>
                                            <option value='Sri-lankaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Sri-lankaise"))} selected="selected"{/if}>
                                                Sri-lankaise
                                            </option>
                                            <option value='Sud-africaine' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Sud-africaine"))} selected="selected"{/if}>
                                                Sud-africaine
                                            </option>
                                            <option value='Sud-coréenne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Sud-coréenne"))} selected="selected"{/if}>
                                                Sud-coréenne
                                            </option>
                                            <option value='Suedoise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Suedoise"))} selected="selected"{/if}>
                                                Suedoise
                                            </option>
                                            <option value='Suisse' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Suisse"))} selected="selected"{/if}>
                                                Suisse
                                            </option>
                                            <option value='Surinamaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Surinamaise"))} selected="selected"{/if}>
                                                Surinamaise
                                            </option>
                                            <option value='Swazie' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Swazie"))} selected="selected"{/if}>
                                                Swazie
                                            </option>
                                            <option value='Syrienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Syrienne"))} selected="selected"{/if}>
                                                Syrienne
                                            </option>
                                            <option value='Tadjike' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Tadjike"))} selected="selected"{/if}>
                                                Tadjike
                                            </option>
                                            <option value='Taiwanaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Taiwanaise"))} selected="selected"{/if}>
                                                Taiwanaise
                                            </option>
                                            <option value='Tanzanienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Tanzanienne"))} selected="selected"{/if}>
                                                Tanzanienne
                                            </option>
                                            <option value='Tchadienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Tchadienne"))} selected="selected"{/if}>
                                                Tchadienne
                                            </option>
                                            <option value='Tcheque' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Tcheque"))} selected="selected"{/if}>
                                                Tcheque
                                            </option>
                                            <option value='Thaïlandaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Thaïlandaise"))} selected="selected"{/if}>
                                                Thaïlandaise
                                            </option>
                                            <option value='Togolaise' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Togolaise"))} selected="selected"{/if}>
                                                Togolaise
                                            </option>
                                            <option value='Tonguienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Tonguienne"))} selected="selected"{/if}>
                                                Tonguienne
                                            </option>
                                            <option value='Trinidadienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Trinidadienne"))} selected="selected"{/if}>
                                                Trinidadienne
                                            </option>
                                            <option value='Tunisienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Tunisienne"))} selected="selected"{/if}>
                                                Tunisienne
                                            </option>
                                            <option value='Turkmene' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Turkmene"))} selected="selected"{/if}>
                                                Turkmene
                                            </option>
                                            <option value='Turque' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Turque"))} selected="selected"{/if}>
                                                Turque
                                            </option>
                                            <option value='Tuvaluane' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Tuvaluane"))} selected="selected"{/if}>
                                                Tuvaluane
                                            </option>
                                            <option value='Ukrainienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Ukrainienne"))} selected="selected"{/if}>
                                                Ukrainienne
                                            </option>
                                            <option value='Uruguayenne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Uruguayenne"))} selected="selected"{/if}>
                                                Uruguayenne
                                            </option>
                                            <option value='Vanuatuane' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Vanuatuane"))} selected="selected"{/if}>
                                                Vanuatuane
                                            </option>
                                            <option value='Venezuelienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Venezuelienne"))} selected="selected"{/if}>
                                                Venezuelienne
                                            </option>
                                            <option value='Vietnamienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Vietnamienne"))} selected="selected"{/if}>
                                                Vietnamienne
                                            </option>
                                            <option value='Yemenite' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Yemenite"))} selected="selected"{/if}>
                                                Yemenite
                                            </option>
                                            <option value='Zambienne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Zambienne"))} selected="selected"{/if}>
                                                Zambienne
                                            </option>
                                            <option value='Zimbabweenne' {if and(is_set($attributesForm.nationalite),eq($attributesForm.nationalite,"Zimbabweenne"))} selected="selected"{/if}>
                                                Zimbabweenne
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="statut" class="col-sm-2 control-label">Statut</label>
                                    <div class="col-sm-6">
                                        <select id="statut" name="statut" class="form-control"
                                                data-error="vous devez remplir ce champ">
                                            <option value="">Choisir son statut</option>
                                            <option value='Recherche un club' {if and(is_set($attributesForm.statut),eq($attributesForm.statut,"club-recherche"))} selected="selected"{/if}>
                                                Recherche un club
                                            </option>
                                            <option value='En club PRO' {if and(is_set($attributesForm.statut),eq($attributesForm.statut,"club-pro"))} selected="selected"{/if}>
                                                En club pro
                                            </option>
                                            <option value='En club amateur' {if and(is_set($attributesForm.statut),eq($attributesForm.statut,"club-amateur"))} selected="selected"{/if}>
                                                En club amateur
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <hr>
                                <div class="form-group">
                                    <label for="email" class="col-sm-2 control-label">Email*</label>
                                    <div class="col-sm-6">
                                        <input type="email" class="form-control" id="email" name="email"
                                               placeholder="Email" data-error="vous devez remplir ce champ"
                                               value="{if is_set($attributesForm.email)}{$attributesForm.email}{/if}"
                                               disabled>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="login" class="col-sm-2 control-label">Login*</label>
                                    <div class="col-sm-6">
                                        <input type="email" class="form-control" id="login" name="login"
                                               placeholder="Login" data-error="vous devez remplir ce champ"
                                               value="{if is_set($attributesForm.login)}{$attributesForm.login}{/if}"
                                               disabled>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="password1" class="col-sm-2 control-label">Mot de passe</label>
                                    <div class="col-sm-6">
                                        <input type="password" class="form-control" id="password1" name="password1"
                                               placeholder="Mot de passe" data-error="vous devez remplir ce champ"
                                               data-minlength="6"
                                               value="" disabled>
                                        <div class="help-block">6 caractères minimum</div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="password2" class="col-sm-2 control-label">Confirmation mot de
                                        passe</label>
                                    <div class="col-sm-6">
                                        <input type="password" class="form-control" id="password2" name="password2"
                                               placeholder="confirmation" data-match="#password1"
                                               data-match-error="oula, les mots de passe sont diférent"
                                               data-minlength="6"
                                               value="" disabled>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="2">
                                <div class="form-group">
                                    <label for="photo_presentation" class="col-sm-2 control-label">Photo/vidéo</label>
                                    <div class="col-sm-6">
                                        <input type="file" class="form-control" id="photo_presentation" name="media"
                                               placeholder="Photo ou Vidéo" data-error="vous devez remplir ce champ"
                                               value="{if is_set($attributesForm.media)}{$attributesForm.media}{/if}">
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="3">
                                <div class="form-group">
                                    <label for="facebook" class="col-sm-2 control-label">Lien facebook*</label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" id="facebook" name="facebook"
                                               placeholder="facebook"
                                               data-error=""
                                               value="{if is_set($attributesForm.facebook)}{$attributesForm.facebook}{/if}">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="twitter" class="col-sm-2 control-label">Lien Twitter*</label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" id="twitter" name="twitter"
                                               placeholder="twitter"
                                               data-error=""
                                               value="{if is_set($attributesForm.twitter)}{$attributesForm.twitter}{/if}">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="instagram" class="col-sm-2 control-label">Lien Instagram*</label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" id="instagram" name="instagram"
                                               placeholder="instagram"
                                               data-error=""
                                               value="{if is_set($attributesForm.instagram)}{$attributesForm.instagram}{/if}">
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="4">
                                <div class="toClone">
                                    {if count($attributesSaisonForm)|gt(0)}
                                        {foreach $attributesSaisonForm as $saison}
                                            <input type="hidden" name="saisonid_0" value="{$saison.object_id}">
                                            <div class="form-group">
                                                <label for="saison" class="col-sm-2 control-label">Saison</label>
                                                <div class="col-sm-6">
                                                    <select id="saison" name="saison_0" class="form-control"
                                                            data-error="vous devez remplir ce champ">
                                                        <option value="">Choisir la saison</option>
                                                        {def $year=currentdate()|datetime(custom, '%Y')}
                                                        {for 0 to 30 as $counter}
                                                            <option value='{sub($year,sum($counter,1))}-{sub($year,$counter)}'{if and(is_set($saison.saison),eq($saison.saison,concat(sub($year,sum($counter,1)),'-',sub($year,$counter))))} selected="selected"{/if}>{sub($year,sum($counter,1))}
                                                                /{sub($year,$counter)}</option>
                                                        {/for}
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="club" class="col-sm-2 control-label">Nom du club</label>
                                                <div class="col-sm-6">
                                                    <input type="text" class="form-control" id="club" name="club_0"
                                                           placeholder="nom du club"
                                                           data-error=""
                                                           value="{if is_set($saison.club)}{$saison.club}{/if}">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="categorie" class="col-sm-2 control-label">Catégorie</label>
                                                <div class="col-sm-6">
                                                    <select id="categorie" name="categorie_0" class="form-control"
                                                            data-error="vous devez remplir ce champ">
                                                        <option value="">Choisir la catégorie</option>
                                                        <option value="Poussin (U7) : 5 ans et 6 ans"{if and(is_set($saison.categorie),eq($saison.categorie,"u7"))} selected="selected"{/if}>
                                                            Poussin (U7) : 5 ans et 6 ans
                                                        </option>
                                                        <option value="Diablotin (U8, U9) : 7 ans, 8 ans"{if and(is_set($saison.categorie),eq($saison.categorie,"u8-u9"))} selected="selected"{/if}>
                                                            Diablotin (U8, U9) : 7 ans, 8 ans
                                                        </option>
                                                        <option value="Préminime (U10, U11) : de 9 à 10 ans"{if and(is_set($saison.categorie),eq($saison.categorie,"u10-u11"))} selected="selected"{/if}>
                                                            Préminime (U10, U11) : de 9 à 10 ans
                                                        </option>
                                                        <option value="Minime (U12, U13) : de 11 à 12 ans"{if and(is_set($saison.categorie),eq($saison.categorie,"u12-u13"))} selected="selected"{/if}>
                                                            Minime (U12, U13) : de 11 à 12 ans
                                                        </option>
                                                        <option value="Cadet (U14, U15) : de 13 à 14 ans"{if and(is_set($saison.categorie),eq($saison.categorie,"u14-u15"))} selected="selected"{/if}>
                                                            Cadet (U14, U15) : de 13 à 14 ans
                                                        </option>
                                                        <option value="Scolaire (U16, U17) : de 15 à 16 ans"{if and(is_set($saison.categorie),eq($saison.categorie,"u16-u17"))} selected="selected"{/if}>
                                                            Scolaire (U16, U17) : de 15 à 16 ans
                                                        </option>
                                                        <option value="Espoir (U18, U19) : de 17 à 18 ans, avec possibilité d'inclure dans la catégorie U19 jusqu'à 6 (U20) : 19 ans"{if and(is_set($saison.categorie),eq($saison.categorie,"u18-u19"))} selected="selected"{/if}>
                                                            Espoir (U18, U19) : de 17 à 18 ans, avec possibilité d'inclure dans la catégorie U19 jusqu'à 6 (U20) : 19 ans
                                                        </option>
                                                        <option value="Senior : de 20 ans à 34 ans"{if and(is_set($saison.categorie),eq($saison.categorie,"senior"))} selected="selected"{/if}>
                                                            Senior : de 20 ans à 34 ans
                                                        </option>
                                                        <option value="Vétéran : au-delà de 35 ans"{if and(is_set($saison.categorie),eq($saison.categorie,"veteran"))} selected="selected"{/if}>
                                                            Vétéran : au-delà de 35 ans
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="division"
                                                       class="col-sm-2 control-label">Niveau/division</label>
                                                <div class="col-sm-6">
                                                    <select id="division" name="division_0" class="form-control"
                                                            data-error="vous devez remplir ce champ">
                                                        <option value="">Choisir la division</option>
                                                        <option value="Ligue 1"{if and(is_set($saison.division),eq($saison.division,"l1"))} selected="selected"{/if}>
                                                            Ligue 1
                                                        </option>
                                                        <option value="Ligue 2"{if and(is_set($saison.division),eq($saison.division,"l2"))} selected="selected"{/if}>
                                                            Ligue 2
                                                        </option>
                                                        <option value="National"{if and(is_set($saison.division),eq($saison.division,"national"))} selected="selected"{/if}>
                                                            National
                                                        </option>
                                                        <option value="CFA"{if and(is_set($saison.division),eq($saison.division,"cfa"))} selected="selected"{/if}>
                                                            CFA
                                                        </option>
                                                        <option value="CFA 2"{if and(is_set($saison.division),eq($saison.division,"cfa2"))} selected="selected"{/if}>
                                                            CFA 2
                                                        </option>
                                                        <option value="Division Honneur"{if and(is_set($saison.division),eq($saison.division,"dh"))} selected="selected"{/if}>
                                                            Division Honneur
                                                        </option>
                                                        <option value="Division Honneur Régionale"{if and(is_set($saison.division),eq($saison.division,"dhr"))} selected="selected"{/if}>
                                                            Division Honneur Régionale
                                                        </option>
                                                        <option value="Division Supérieure Régionale"{if and(is_set($saison.division),eq($saison.division,"dsr"))} selected="selected"{/if}>
                                                            Division Supérieure Régionale
                                                        </option>
                                                        <option value="Promotion Honneur"{if and(is_set($saison.division),eq($saison.division,"ph"))} selected="selected"{/if}>
                                                            Promotion Honneur
                                                        </option>
                                                        <option value="Promotion Honneur Régionale"{if and(is_set($saison.division),eq($saison.division,"phr"))} selected="selected"{/if}>
                                                            Promotion Honneur Régionale
                                                        </option>
                                                        <option value="Promotion Honneur A"{if and(is_set($saison.division),eq($saison.division,"pha"))} selected="selected"{/if}>
                                                            Promotion Honneur A
                                                        </option>
                                                        <option value="Promotion Honneur B"{if and(is_set($saison.division),eq($saison.division,"phb"))} selected="selected"{/if}>
                                                            Promotion Honneur B
                                                        </option>
                                                        <option value="Promotion Honneur C"{if and(is_set($saison.division),eq($saison.division,"phc"))} selected="selected"{/if}>
                                                            Promotion Honneur C
                                                        </option>
                                                        <option value="Ligue Régionale 2"{if and(is_set($saison.division),eq($saison.division,"lr2"))} selected="selected"{/if}>
                                                            Ligue Régionale 2
                                                        </option>
                                                        <option value="Ligue Régionale 3"{if and(is_set($saison.division),eq($saison.division,"lr3"))} selected="selected"{/if}>
                                                            Ligue Régionale 3
                                                        </option>
                                                        <option value="Promotion Ligue"{if and(is_set($saison.division),eq($saison.division,"pl"))} selected="selected"{/if}>
                                                            Promotion Ligue
                                                        </option>
                                                        <option value="Division Supérieure Élite"{if and(is_set($saison.division),eq($saison.division,"dse"))} selected="selected"{/if}>
                                                            Division Supérieure Élite
                                                        </option>
                                                        <option value="Division Supérieure Régionale"{if and(is_set($saison.division),eq($saison.division,"dsr"))} selected="selected"{/if}>
                                                            Division Supérieure Régionale
                                                        </option>
                                                        <option value="Elite"{if and(is_set($saison.division),eq($saison.division,"elite"))} selected="selected"{/if}>
                                                            Elite
                                                        </option>
                                                        <option value="Excellence"{if and(is_set($saison.division),eq($saison.division,"Excellence"))} selected="selected"{/if}>
                                                            Excellence
                                                        </option>
                                                        <option value="Promotion Excellence"{if and(is_set($saison.division),eq($saison.division,"pe"))} selected="selected"{/if}>
                                                            Promotion Excellence
                                                        </option>
                                                        <option value="Division 1"{if and(is_set($saison.division),eq($saison.division,"Division 1"))} selected="selected"{/if}>
                                                            Division 1
                                                        </option>
                                                        <option value="Division 2"{if and(is_set($saison.division),eq($saison.division,"Division 2"))} selected="selected"{/if}>
                                                            Division 2
                                                        </option>
                                                        <option value="Division 3"{if and(is_set($saison.division),eq($saison.division,"Division 3"))} selected="selected"{/if}>
                                                            Division 3
                                                        </option>
                                                        <option value="Division 4"{if and(is_set($saison.division),eq($saison.division,"Division 4"))} selected="selected"{/if}>
                                                            Division 4
                                                        </option>
                                                        <option value="Division 5"{if and(is_set($saison.division),eq($saison.division,"Division 5"))} selected="selected"{/if}>
                                                            Division 5
                                                        </option>
                                                        <option value="Autre"{if and(is_set($saison.division),eq($saison.division,"Autre"))} selected="selected"{/if}>
                                                            Autre
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="poste" class="col-sm-2 control-label">Poste</label>
                                                <div class="col-sm-6">
                                                    <select id="poste" name="poste_0" class="form-control"
                                                            data-error="vous devez remplir ce champ">
                                                        <option value="">Choisir le poste</option>
                                                        <option value="Gardien de but"{if and(is_set($saison.poste),eq($saison.poste,"Gardien de but"))} selected="selected"{/if}>
                                                            Gardien de but
                                                        </option>
                                                        <option value="Défenseur central"{if and(is_set($saison.poste),eq($saison.poste,"Défenseur central"))} selected="selected"{/if}>
                                                            Défenseur central
                                                        </option>
                                                        <option value="Défenseur gauche"{if and(is_set($saison.poste),eq($saison.poste,"Défenseur gauche"))} selected="selected"{/if}>
                                                            Défenseur gauche
                                                        </option>
                                                        <option value="Défenseur droit"{if and(is_set($saison.poste),eq($saison.poste,"Défenseur droit"))} selected="selected"{/if}>
                                                            Défenseur droit
                                                        </option>
                                                        <option value="Libéro"{if and(is_set($saison.poste),eq($saison.poste,"Libéro"))} selected="selected"{/if}>
                                                            Libéro
                                                        </option>
                                                        <option value="Milieu defensif"{if and(is_set($saison.poste),eq($saison.poste,"Milieu defensif"))} selected="selected"{/if}>
                                                            Milieu defensif
                                                        </option>
                                                        <option value="Milieu gauche"{if and(is_set($saison.poste),eq($saison.poste,"Milieu gauche"))} selected="selected"{/if}>
                                                            Milieu gauche
                                                        </option>
                                                        <option value="Milieu droit"{if and(is_set($saison.poste),eq($saison.poste,"Milieu droit"))} selected="selected"{/if}>
                                                            Milieu droit
                                                        </option>
                                                        <option value="Milieu axial"{if and(is_set($saison.poste),eq($saison.poste,"Milieu axial"))} selected="selected"{/if}>
                                                            Milieu axial
                                                        </option>
                                                        <option value="Milieu offensif"{if and(is_set($saison.poste),eq($saison.poste,"Milieu offensif"))} selected="selected"{/if}>
                                                            Milieu offensif
                                                        </option>
                                                        <option value="Ailier gauche"{if and(is_set($saison.poste),eq($saison.poste,"Ailier gauche"))} selected="selected"{/if}>
                                                            Ailier gauche
                                                        </option>
                                                        <option value="Ailier droit"{if and(is_set($saison.poste),eq($saison.poste,"Ailier droit"))} selected="selected"{/if}>
                                                            Ailier droit
                                                        </option>
                                                        <option value="Attaquant axial"{if and(is_set($saison.poste),eq($saison.poste,"Attaquant axial"))} selected="selected"{/if}>
                                                            Attaquant axial
                                                        </option>
                                                        <option value="Attaquant"{if and(is_set($saison.poste),eq($saison.poste,"Attaquant"))} selected="selected"{/if}>
                                                            Attaquant
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="coach" class="col-sm-2 control-label">Coach</label>
                                                <div class="col-sm-6">
                                                    <input type="text" class="form-control" id="coach" name="coach_0"
                                                           placeholder="Nom du Coach"
                                                           data-error=""
                                                           value="{if is_set($saison.coach)}{$saison.coach}{/if}">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="selection" class="col-sm-2 control-label">Sélections
                                                    départementales
                                                    / régionales / nationales</label>
                                                <div class="col-sm-6">
                                                    <select id="selection" name="selection_0" class="form-control"
                                                            data-error="vous devez remplir ce champ">
                                                        <option value="">Aucune sélection</option>
                                                        <option value="departementale"{if and(is_set($saison.selection),eq($saison.selection,"departementale"))} selected="selected"{/if}>
                                                            Sélection départementale
                                                        </option>
                                                        <option value="regionale"{if and(is_set($saison.selection),eq($saison.selection,"regionale"))} selected="selected"{/if}>
                                                            Sélection régionale
                                                        </option>
                                                        <option value="nationale"{if and(is_set($saison.selection),eq($saison.selection,"nationale"))} selected="selected"{/if}>
                                                            Sélection nationale
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="palmares" class="col-sm-2 control-label">Palmarès</label>
                                                <div class="col-sm-6">
                                                    <input type="text" class="form-control" id="palmares"
                                                           name="palmares_0"
                                                           placeholder="Palmarès (championnat, coupe, tournois, etc...)"
                                                           data-error=""
                                                           value="{if is_set($saison.palmares)}{$saison.palmares}{/if}">
                                                </div>
                                            </div>
                                            <hr>
                                        {/foreach}
                                    {else}
                                        <input type="hidden" name="saisonid_0" value="">
                                        <div class="form-group">
                                            <label for="saison" class="col-sm-2 control-label">Saison</label>
                                            <div class="col-sm-6">
                                                <select id="saison" name="saison_0" class="form-control"
                                                        data-error="vous devez remplir ce champ">
                                                    <option value="">Choisir la saison</option>
                                                    {def $year=currentdate()|datetime(custom, '%Y')}
                                                    {for 0 to 30 as $counter}
                                                        <option value='{sub($year,sum($counter,1))}-{sub($year,$counter)}'>{sub($year,sum($counter,1))}
                                                            /{sub($year,$counter)}</option>
                                                    {/for}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="club" class="col-sm-2 control-label">Nom du club</label>
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control" id="club" name="club_0"
                                                       placeholder="nom du club"
                                                       data-error=""
                                                       value="{if is_set($saison.club)}{$saison.club}{/if}">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="categorie" class="col-sm-2 control-label">Catégorie</label>
                                            <div class="col-sm-6">
                                                <select id="categorie" name="categorie_0" class="form-control"
                                                        data-error="vous devez remplir ce champ">
                                                    <option value="">Choisir la catégorie</option>
                                                    <option value="u7"{if and(is_set($saison.statut),eq($saison.statut,"u7"))} selected="selected"{/if}>
                                                        Poussin (U7) : 5 ans et 6 ans
                                                    </option>
                                                    <option value="u8-u9"{if and(is_set($saison.statut),eq($saison.statut,"u8-u9"))} selected="selected"{/if}>
                                                        Diablotin (U8, U9) : 7 ans, 8 ans
                                                    </option>
                                                    <option value="u10-u11"{if and(is_set($saison.statut),eq($saison.statut,"u10-u11"))} selected="selected"{/if}>
                                                        Préminime (U10, U11) : de 9 à 10 ans
                                                    </option>
                                                    <option value="u12-u13"{if and(is_set($saison.statut),eq($saison.statut,"u12-u13"))} selected="selected"{/if}>
                                                        Minime (U12, U13) : de 11 à 12 ans
                                                    </option>
                                                    <option value="u14-u15"{if and(is_set($saison.statut),eq($saison.statut,"u14-u15"))} selected="selected"{/if}>
                                                        Cadet (U14, U15) : de 13 à 14 ans
                                                    </option>
                                                    <option value="u16-u17"{if and(is_set($saison.statut),eq($saison.statut,"u16-u17"))} selected="selected"{/if}>
                                                        Scolaire (U16, U17) : de 15 à 16 ans
                                                    </option>
                                                    <option value="u18-u19"{if and(is_set($saison.statut),eq($saison.statut,"u18-u19"))} selected="selected"{/if}>
                                                        Espoir (U18, U19) : de 17 à 18 ans, avec
                                                        possibilité d'inclure dans la catégorie U19 jusqu'à 6 (U20)
                                                        : 19 ans
                                                    </option>
                                                    <option value="senior"{if and(is_set($saison.statut),eq($saison.statut,"senior"))} selected="selected"{/if}>
                                                        Senior : de 20 ans à 34 ans
                                                    </option>
                                                    <option value="veteran"{if and(is_set($saison.statut),eq($saison.statut,"veteran"))} selected="selected"{/if}>
                                                        Vétéran : au-delà de 35 ans
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="division"
                                                   class="col-sm-2 control-label">Niveau/division</label>
                                            <div class="col-sm-6">
                                                <select id="division" name="division_0" class="form-control"
                                                        data-error="vous devez remplir ce champ">
                                                    <option value="">Choisir la division</option>
                                                    <option value="l1"{if and(is_set($saison.division),eq($saison.division,"l1"))} selected="selected"{/if}>
                                                        Ligue 1
                                                    </option>
                                                    <option value="l2"{if and(is_set($saison.division),eq($saison.division,"l2"))} selected="selected"{/if}>
                                                        Ligue 2
                                                    </option>
                                                    <option value="national"{if and(is_set($saison.division),eq($saison.division,"national"))} selected="selected"{/if}>
                                                        National
                                                    </option>
                                                    <option value="cfa"{if and(is_set($saison.division),eq($saison.division,"cfa"))} selected="selected"{/if}>
                                                        CFA
                                                    </option>
                                                    <option value="cfa2"{if and(is_set($saison.division),eq($saison.division,"cfa2"))} selected="selected"{/if}>
                                                        CFA 2
                                                    </option>
                                                    <option value="dh"{if and(is_set($saison.division),eq($saison.division,"dh"))} selected="selected"{/if}>
                                                        Division Honneur
                                                    </option>
                                                    <option value="dhr"{if and(is_set($saison.division),eq($saison.division,"dhr"))} selected="selected"{/if}>
                                                        Division Honneur Régionale
                                                    </option>
                                                    <option value="dsr"{if and(is_set($saison.division),eq($saison.division,"dsr"))} selected="selected"{/if}>
                                                        Division Supérieure Régionale
                                                    </option>
                                                    <option value="ph"{if and(is_set($saison.division),eq($saison.division,"ph"))} selected="selected"{/if}>
                                                        Promotion Honneur
                                                    </option>
                                                    <option value="phr"{if and(is_set($saison.division),eq($saison.division,"phr"))} selected="selected"{/if}>
                                                        Promotion Honneur Régionale
                                                    </option>
                                                    <option value="pha"{if and(is_set($saison.division),eq($saison.division,"pha"))} selected="selected"{/if}>
                                                        Promotion Honneur A
                                                    </option>
                                                    <option value="phb"{if and(is_set($saison.division),eq($saison.division,"phb"))} selected="selected"{/if}>
                                                        Promotion Honneur B
                                                    </option>
                                                    <option value="phc"{if and(is_set($saison.division),eq($saison.division,"phc"))} selected="selected"{/if}>
                                                        Promotion Honneur C
                                                    </option>
                                                    <option value="lr2"{if and(is_set($saison.division),eq($saison.division,"lr2"))} selected="selected"{/if}>
                                                        Ligue Régionale 2
                                                    </option>
                                                    <option value="lr3"{if and(is_set($saison.division),eq($saison.division,"lr3"))} selected="selected"{/if}>
                                                        Ligue Régionale 3
                                                    </option>
                                                    <option value="pl"{if and(is_set($saison.division),eq($saison.division,"pl"))} selected="selected"{/if}>
                                                        Promotion Ligue
                                                    </option>
                                                    <option value="dse"{if and(is_set($saison.division),eq($saison.division,"dse"))} selected="selected"{/if}>
                                                        Division Supérieure Élite
                                                    </option>
                                                    <option value="dsr"{if and(is_set($saison.division),eq($saison.division,"dsr"))} selected="selected"{/if}>
                                                        Division Supérieure Régionale
                                                    </option>
                                                    <option value="elite"{if and(is_set($saison.division),eq($saison.division,"elite"))} selected="selected"{/if}>
                                                        Elite
                                                    </option>
                                                    <option value="excellence"{if and(is_set($saison.division),eq($saison.division,"excellence"))} selected="selected"{/if}>
                                                        Excellence
                                                    </option>
                                                    <option value="pe"{if and(is_set($saison.division),eq($saison.division,"pe"))} selected="selected"{/if}>
                                                        Promotion Excellence
                                                    </option>
                                                    <option value="d1"{if and(is_set($saison.division),eq($saison.division,"d1"))} selected="selected"{/if}>
                                                        Division 1
                                                    </option>
                                                    <option value="d2"{if and(is_set($saison.division),eq($saison.division,"d2"))} selected="selected"{/if}>
                                                        Division 2
                                                    </option>
                                                    <option value="d3"{if and(is_set($saison.division),eq($saison.division,"d3"))} selected="selected"{/if}>
                                                        Division 3
                                                    </option>
                                                    <option value="d4"{if and(is_set($saison.division),eq($saison.division,"d4"))} selected="selected"{/if}>
                                                        Division 4
                                                    </option>
                                                    <option value="d5"{if and(is_set($saison.division),eq($saison.division,"d5"))} selected="selected"{/if}>
                                                        Division 5
                                                    </option>
                                                    <option value="autre"{if and(is_set($saison.division),eq($saison.division,"autre"))} selected="selected"{/if}>
                                                        Autre
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="poste" class="col-sm-2 control-label">Poste</label>
                                            <div class="col-sm-6">
                                                <select id="poste" name="poste_0" class="form-control"
                                                        data-error="vous devez remplir ce champ">
                                                    <option value="">Choisir le poste</option>
                                                    <option value="gardien"{if and(is_set($saison.poste),eq($saison.poste,"gardien"))} selected="selected"{/if}>
                                                        Gardien de but
                                                    </option>
                                                    <option value="defenseur-central"{if and(is_set($saison.poste),eq($saison.poste,"defenseur-central"))} selected="selected"{/if}>
                                                        Défenseur central
                                                    </option>
                                                    <option value="defenseur-gauche"{if and(is_set($saison.poste),eq($saison.poste,"defenseur-gauche"))} selected="selected"{/if}>
                                                        Défenseur gauche
                                                    </option>
                                                    <option value="defenseur-droit"{if and(is_set($saison.poste),eq($saison.poste,"defenseur-droit"))} selected="selected"{/if}>
                                                        Défenseur droit
                                                    </option>
                                                    <option value="libero"{if and(is_set($saison.poste),eq($saison.poste,"libero"))} selected="selected"{/if}>
                                                        Libéro
                                                    </option>
                                                    <option value="milieu-defensif"{if and(is_set($saison.poste),eq($saison.poste,"milieu-defensif"))} selected="selected"{/if}>
                                                        Milieu defensif
                                                    </option>
                                                    <option value="milieu-gauche"{if and(is_set($saison.poste),eq($saison.poste,"milieu-gauche"))} selected="selected"{/if}>
                                                        Milieu gauche
                                                    </option>
                                                    <option value="milieu-droit"{if and(is_set($saison.poste),eq($saison.poste,"milieu-droit"))} selected="selected"{/if}>
                                                        Milieu droit
                                                    </option>
                                                    <option value="milieu-axial"{if and(is_set($saison.poste),eq($saison.poste,"milieu-axial"))} selected="selected"{/if}>
                                                        Milieu axial
                                                    </option>
                                                    <option value="milieu-offensif"{if and(is_set($saison.poste),eq($saison.poste,"milieu-offensif"))} selected="selected"{/if}>
                                                        Milieu offensif
                                                    </option>
                                                    <option value="ailier-gauche"{if and(is_set($saison.poste),eq($saison.poste,"ailier-gauche"))} selected="selected"{/if}>
                                                        Ailier gauche
                                                    </option>
                                                    <option value="ailier-droit"{if and(is_set($saison.poste),eq($saison.poste,"ailier-droit"))} selected="selected"{/if}>
                                                        Ailier droit
                                                    </option>
                                                    <option value="attaquant-axial"{if and(is_set($saison.poste),eq($saison.poste,"attaquant-axial"))} selected="selected"{/if}>
                                                        Attaquant axial
                                                    </option>
                                                    <option value="autre"{if and(is_set($saison.poste),eq($saison.poste,"autre"))} selected="selected"{/if}>
                                                        Attaquant
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="coach" class="col-sm-2 control-label">Coach</label>
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control" id="coach" name="coach_0"
                                                       placeholder="Nom du Coach"
                                                       data-error=""
                                                       value="{if is_set($saison.coach)}{$saison.coach}{/if}">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="selection" class="col-sm-2 control-label">Sélections
                                                départementales
                                                / régionales / nationales</label>
                                            <div class="col-sm-6">
                                                <select id="selection" name="selection_0" class="form-control"
                                                        data-error="vous devez remplir ce champ">
                                                    <option value="">Aucune sélection</option>
                                                    <option value="departementale"{if and(is_set($saison.selection),eq($saison.selection,"departementale"))} selected="selected"{/if}>
                                                        Sélection départementale
                                                    </option>
                                                    <option value="régionale"{if and(is_set($saison.selection),eq($saison.selection,"regionale"))} selected="selected"{/if}>
                                                        Sélection régionale
                                                    </option>
                                                    <option value="nationale"{if and(is_set($saison.selection),eq($saison.selection,"nationale"))} selected="selected"{/if}>
                                                        Sélection nationale
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="palmares" class="col-sm-2 control-label">Palmarès</label>
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control" id="palmares"
                                                       name="palmares_0"
                                                       placeholder="Palmarès (championnat, coupe, tournois, etc...)"
                                                       data-error=""
                                                       value="{if is_set($saison.palmares)}{$saison.palmares}{/if}">
                                            </div>
                                        </div>
                                        <hr>
                                    {/if}
                                </div>
                                <div id="addXP"><a href="#">Ajouter une expériences</a></div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="col-sm-2 control-label"></label>
                        <div class="col-sm-6">
                            <button type="submit" class="btn btn-lg btn-primary pull-right">Valider</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
