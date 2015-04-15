var Thermostat = function(){

  this.powersave = true;
  this.temperature = 20;
  this.colour = 'Yellow'
};

Thermostat.prototype.up = function() {
  if(this.temperature >= 25 && this.powersave === true){
    throw new Error ('Maximum Temperature Reached for Power Save Mode')
  };
  if(this.temperature >= 35 && this.powersave === false){
    throw new Error ('Maximum Temperature Reached')
  }
  this.temperature ++
  this.colorChange()
};

Thermostat.prototype.down = function() {
  if(this.temperature <= 10){
    throw new Error('Minimum Temperature Reached');
  };
  this.temperature --
this.colorChange();
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
  this.colour = 'Yellow';
  this.powersave = true;
};

Thermostat.prototype.colorChange = function() {
  if(this.temperature > 25) { this.colour = 'Red'};
  if(this.temperature >= 18  && this.temperature <= 25) { this.colour = 'Yellow'};
  if(this.temperature < 18) { this.colour = 'Green'};
};