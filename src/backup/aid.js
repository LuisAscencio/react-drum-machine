//LOOP:::
let loopBeat;

//UTILITIES::
let counter;
let rand;
let rand2;
counter = 0;

// Create instances::

// Start
loopBeat = new Tone.Loop(song, "16n");
Tone.Transport.bpm.value = 130;
Tone.Transport.start();
loopBeat.start(0);

function song(time) {
  //

  let currentBeat = Tone.Transport.position.split(":");
  // Set Seqeunce:::
  // kick

  console.log(`This is rand: ${rand}`);
  console.log(`This is rand2: ${rand2}`);

  console.log(time);
  console.log(currentBeat);
  // Set counter
  counter = (counter + 1) % 16;
}
