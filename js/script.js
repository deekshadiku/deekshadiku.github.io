// WEB303 Assignment 2

$(document).on("click", 
    '#vprospect', function(event) { 
	var prospectdata = new XMLHttpRequest;
    prospectdata.open('GET', 'prospect.html', true);
    $('#vprospect').load('prospect.html #vprospect');
});

$(document).on("click", 
    '#vretain', function(event) { 
    var retaindata = new XMLHttpRequest;
    xhr.open('GET', 'retain.html', true);
    $('#vretain').load('retain.html #vretain');
});

$(document).on("click", 
    '#vconvert', function(event) { 
	var convert = new XMLHttpRequest;
    convert.open('GET', 'convert.html', true);
    $('#vconvert').load('convert.html #vconvert');
});
