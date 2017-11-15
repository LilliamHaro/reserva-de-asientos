// Declarar un arreglo que representara los asientos de nuestro
//  asiento vacío = false ------ ocupado = true
var airlineSeats = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false
];

// Contador que nos ayudara a rastrear el numero de asientos acupados
var busySeats = 0;
// mostrar los asientos
var paintSeats = function(array) {
  var containerSeats = document.getElementById('seats');
  // pasar por el arreglo
  for (var index = 0; index < array.length; index++) {
    var seat = document.createElement('div');
    seat.className = 'seats';

    // del primer asiento al cuatro 1 - 4 --> en nuestro arreglo va a ser Primera clase, que seria del indice 0 al 3
    if (index < 4) {
      seat.style.background = 'purple';
    } else {
      seat.style.background = 'yellow';
    }
    containerSeats.appendChild(seat);
  }
};
// reservar de asientos
var reserve = function() {
  var btn = document.getElementById('btn');
  btn.addEventListener('click', chooseZone);
};

var chooseZone = function() {
  var choice = prompt('En que zona prefieres reservar \n 1. Primera Clase \n 2. Economica \n \n Por favor ingresa el numero de tu preferencia');

  if (choice === "1") {
    checkFirstClassZone();
  } else if (choice === "2") {
      checkEconomicZone();
  } else {
      alert('Por favor ingresa un numero valido');
  }
};

var checkFirstClassZone = function() {
    var zone = 'Primera Clase';
    // recorre ele elemnto del 0 al 3 y verifica cuales estan disponles
    for (var index = 0; index < 4; index++) {
      if(airlineSeats[index]===false) {
        airlineSeats[index] = true;
        reserveSeat(index);
        paintTicket(index, zone);
        busySeats++;
        // al reservar un asiento ya no debemos seguir recoriendo el elemento
        //recorremos el for con un reak
        break;
      } else if (index == 3 && airlineSeats[index] == true) {
        reasingEconomicZone(zone);
      }
    }
};

var checkEconomicZone = function() {
  var zone = 'Economica';
  // recorre ele elemnto del 0 al 3 y verifica cuales estan disponles
  for (var index = 4; index < 10; index++) {
    if(airlineSeats[index]===false) {
      airlineSeats[index] = true;
      reserveSeat(index);
        paintTicket(index, zone);
        busySeats++;
      // al reservar un asiento ya no debemos seguir recoriendo el elemento
      //recorremos el for con un reak
      break;
    }  else if (index == 0 && airlineSeats[index] == true) {
        reasingFirstClassZone(zone);
      }
  }

};

var reserveSeat = function (indexToPaint) {
    var seat = document.getElementsByClassName('seats');
    seat[indexToPaint].textContent = 'Ocupado';
  };

  var reasingEconomicZone = function(zone) {
    if (busySeats == 10) {
      noSeat();
      nextFlight();
    } else {
      var reasing = confirm('Ya no quedan asientos disponibles en ' + zone + ':(\n Quieres reservar en zona Economica?');
      if (reasing == true) {
        checkEconomicZone();
      } else {
        nextFlight();
      }
    }
  };

// al parecer esta ignorando esto :0!!
  var reasingFirstClassZone = function(zone) {
    if (busySeats == 10) {
      noSeat();
      nextFlight();
    } else {
      var reasing = confirm('Ya no quedan asientos disponibles en ' + zone + ':(\n Quieres reservar en Primera Clase?');
      if (reasing == true) {
        checkFirstClassZone();
      } else {
        nextFlight();
      }
    }
  };

  var paintTicket = function (index, zone) {
    var containerTicket = document.getElementById('tickets');
    var ticket = document.createElement('div');
    ticket.className = 'seats';
    var title = document.createElement('p');
    var reservedSeating = document.createElement('p');
    var zoneClass = document.createElement('p');
    title.textContent = 'Pase de Abordar';
    reservedSeating.textContent = 'No. de asiento: ' + (index + 1);
    zoneClass.textContent = zone;
    ticket.appendChild(title);
    ticket.appendChild(reservedSeating);
    ticket.appendChild(zoneClass);
    containerTicket.appendChild(ticket);
  };

  var nextFlight = function () {
    alert('Nuestro proximo vuelo sale en 3 horas')
  };

  var noSeat = function () {
    alert('Lo sentimos : ( \n Ya no quedan asientos disponibles en este avion.');
  };

paintSeats(airlineSeats);
reserve();
