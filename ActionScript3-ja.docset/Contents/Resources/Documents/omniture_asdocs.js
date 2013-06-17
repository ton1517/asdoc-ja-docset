function showForm(){
	s_chl.pageName=s_chl.eVar7=s_chl.campaign=document.title;
	s_chl.eVar3=document.URL.toLowerCase();
	switch(true)
	{
		case document.URL.indexOf('en_US') > 0 || document.URL.indexOf('/en/') > 0 || document.URL.indexOf('=en') > 0:
			s_chl.eVar8="en_us";
			break;
		case document.URL.indexOf('ja_JP') > 0 || document.URL.indexOf('/jp/') > 0 || document.URL.indexOf('=jp') > 0:
			s_chl.eVar8="ja_JP";
			break;
		case document.URL.indexOf('fr_FR') > 0 || document.URL.indexOf('/fr/') > 0 || document.URL.indexOf('=fr') > 0:
			s_chl.eVar8="fr_FR";
			break;
		case document.URL.indexOf('de_DE') > 0 || document.URL.indexOf('/de/') > 0 || document.URL.indexOf('=de') > 0:
			s_chl.eVar8="de_DE";
			break;
		case document.URL.indexOf('it_IT') > 0 || document.URL.indexOf('/it/') > 0 || document.URL.indexOf('=it') > 0:
			s_chl.eVar8="it_IT";
			break;
		case document.URL.indexOf('sv_SE') > 0 || document.URL.indexOf('/se/') > 0 || document.URL.indexOf('=sv') > 0:
			s_chl.eVar8="sv_SE";
			break;
		case document.URL.indexOf('es_ES') > 0 || document.URL.indexOf('/es/') > 0 || document.URL.indexOf('=es') > 0:
			s_chl.eVar8="es_ES";
			break;
		case document.URL.indexOf('nl_NL') > 0 || document.URL.indexOf('/nl/') > 0 || document.URL.indexOf('=nl') > 0:
			s_chl.eVar8="nl_NL";
			break;
		case document.URL.indexOf('da_DK') > 0 || document.URL.indexOf('/dk/') > 0 || document.URL.indexOf('=da') > 0:
			s_chl.eVar8="da_DK";
			break;
		case document.URL.indexOf('pt_BR') > 0 || document.URL.indexOf('/br/') > 0 || document.URL.indexOf('=br') > 0:
			s_chl.eVar8="pt_BR";
			break;
		case document.URL.indexOf('nb_NO') > 0 || document.URL.indexOf('/no/') > 0 || document.URL.indexOf('=nb') > 0:
			s_chl.eVar8="nb_NO";
			break;
		case document.URL.indexOf('fi_FI') > 0 || document.URL.indexOf('/fi/') > 0 || document.URL.indexOf('=fi') > 0:
			s_chl.eVar8="fi_FI";
			break;
		case document.URL.indexOf('cs_CZ') > 0:
			s_chl.eVar8="cs_CZ";
			break;
		case document.URL.indexOf('ko_KR') > 0:
			s_chl.eVar8="cs_CZ";
			break;
		case document.URL.indexOf('pl_PL') > 0:
			s_chl.eVar8="pl_PL";
			break;
		case document.URL.indexOf('ru_RU') > 0:
			s_chl.eVar8="ru_RU";
			break;
		case document.URL.indexOf('tr_TR') > 0:
			s_chl.eVar8="tr_TR";
			break;
		case document.URL.indexOf('zh_CN') > 0:
			s_chl.eVar8="zh_CN";
			break;
		case document.URL.indexOf('zh_TW') > 0:
			s_chl.eVar8="zh_TW";
			break;
		default:
			s_chl.eVar8="en_us";
	}
	s_chl.channel='help.adobe.com';
	s_chl.pageURL=document.URL.toLowerCase();
	s_chl.eVar6=document.URL.toLowerCase();
	$('#helpfulspan').hide();
	$('#radioyes').hide();
	$('#radiono').hide();
	$('#yesspan').hide();
	$('#nospan').hide();
	$('#helpful').animate({width:'420px', height: '160px'});
	$('#helpful').removeClass('collapsed');
	$('#helpful').addClass('expanded');
	$('#fold').css('background-image', 'url(/etc/designs/help/images/fold-gray.png)');
	displayTextField_new();
	$('#submitButton').css('margin-left','10px');
	$('#termsofuse').css('margin-left','10px');
}
function submitForm_new(){
	sendFeedback_new();
	hideForm_new();                                    
}
function displayTextField_new(){
	document.getElementById('feedbacktext').style.display='inline';
	document.getElementById('submitButton').style.display='inline';
	document.getElementById('noCommentButton').style.display='inline';
	document.getElementById('termsofuse').style.display='inline';
	document.getElementById('radioyes').checked ? radio_event='scAdd' : radio_event='scRemove';
	s_chl.linkTrackEvents='scAdd,scRemove';
	s_chl.events=radio_event;
	s_chl.eVar2='';
	s_chl.eVar55=s_chl.eVar56=s_chl.eVar57=s_chl.eVar58='';
	s_chl.tl(true,'o','Feedback rating radio click');
}
function sendFeedback_new(){
	var verbatim=document.getElementById('feedbacktext').value;
	verbatim=escape(verbatim);
	verbatim=verbatim.replace(/(%3C|%3E|%22|%0D|%0A|%0D%0A|%23|%26|%2F)/g, "%2D");
	verbatim=unescape(verbatim);
	document.getElementById('radioyes').checked ? radio_event='event1' : radio_event='event2';
	s_chl.linkTrackEvents='event1,event2';
	s_chl.eVar2=verbatim;
	s_chl.events=radio_event;
	s_chl.eVar55=s_chl.eVar56=s_chl.eVar57=s_chl.eVar58='';
	s_chl.tl(true,'o','Feedback submission with verbatim text');
	document.getElementById('helpful').textContent=lThanks;

}
function hideForm_new(){
	document.getElementById('helpful').textContent=lThanks;
	$('#helpful').animate({height: '15px'});
	$('#helpful-pod').fadeOut(3000, function(){ 
		$('.thankyou').toggle().html( lThanks );
		$('.thankyou').delay(1000).fadeOut('slow');
	}); 
	
}