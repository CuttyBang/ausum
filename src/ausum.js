const osc = {
  greet() {
    return 'hello';
  }
  context(ctx, output)
  {
    let AudioContext = window.AudioContext || window.webkitAudioContext;

    ctx = new AudioContext;
    if(out){
      out = ctx.destination;
    }
    return ctx, out;

  }

  out(output)
  {
    if(!output){
      throw Error ('The output destination needs to be defined')
    }else{
      output = context.output;
    }
    return output;
  }
};

export default osc;
