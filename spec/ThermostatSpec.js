describe('Thermostat', function(){
  
  var thermostat;

  beforeEach( function(){
    thermostat = new Thermostat()
  });

  describe('set temperature', function(){

    it('has a default temperature of 20', function(){
      expect(thermostat.temperature).toEqual(20)
    });

    it('can increase by 1 degree', function(){
      thermostat.up()
      expect(thermostat.temperature).toEqual(21);
    });

    it('can decrease by 1 degree', function(){
      thermostat.down()
      expect(thermostat.temperature).toEqual(19);
    });

    it('raises an error when minimum temperature reached', function(){
      thermostat.temperature = 10;
      expect( function(){ thermostat.down(); } ).toThrow(new Error ('Minimum Temperature Reached'));
      expect( thermostat.temperature ).toEqual(10);
    });

    it('maximum temperature is 25 when power saving mode is on', function(){
      thermostat.temperature = 25;
      expect( function(){ thermostat.up(); } ).toThrow(new Error ('Maximum Temperature Reached for Power Save Mode'));
    });

    it('maximum temperature is 35 when power saving mode is off', function(){
      thermostat.powersave = false;
      thermostat.temperature = 35;
      expect( function(){ thermostat.up(); } ).toThrow(new Error ('Maximum Temperature Reached'))
    });

    it('when reset, temperature returns to 20', function(){
      thermostat.temperature = 24;
      thermostat.reset();
      expect( thermostat.temperature ).toEqual(20);
    });

  });

  describe('color change', function(){

    it('is yellow between 18 and 25 degrees', function(){
      thermostat.powersave = false;
      thermostat.temperature = 25;
      thermostat.up()
      thermostat.down()
      expect(thermostat.colour).toEqual('Yellow');
    });

    it('turns yellow between 18 and 25 degrees', function(){
      thermostat.temperature =18;
      thermostat.down();
      thermostat.up();
      expect(thermostat.colour).toEqual('Yellow');
    });

    it('is red above 25 degrees', function(){
      thermostat.powersave = false;
      thermostat.temperature = 25;
      thermostat.up();
      expect(thermostat.colour).toEqual('Red');
    });

    it('is green when below 18', function(){
      thermostat.temperature = 18;
      thermostat.down();
      expect(thermostat.colour).toEqual('Green');
    });

  });

});