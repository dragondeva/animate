(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Web_atlas_", frames: [[470,666,150,46],[0,666,250,246],[0,0,1255,664],[252,666,216,216]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["Web_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["Web_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Capture = function() {
	this.spriteSheet = ss["Web_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.img_560545 = function() {
	this.spriteSheet = ss["Web_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;

	this.instance_1 = new lib.Bitmap1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(200,144);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,350,246), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("AglAkQgKgOAAgVQAAgZANgPQAOgOAUAAQAWAAAOAPQANAPgBAfIhDAAQAAAMAGAHQAHAHAIAAQAHAAAEgEQAEgDADgIIAbAEQgFAPgMAIQgLAIgRAAQgaAAgNgSgAgNgaQgGAHAAALIAoAAQAAgMgGgGQgGgGgIAAQgIAAgGAGg");
	this.shape.setTransform(135.2,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AghA1IAAhnIAaAAIAAAPQAGgKAFgEQAFgDAHAAQAJAAAJAFIgJAYQgHgFgGABQgGgBgEAEQgDADgCAIQgCAJAAAZIAAAgg");
	this.shape_1.setTransform(126.6,14.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgaAwQgNgHgHgMQgHgNAAgRQAAgNAHgNQAHgNAMgHQANgGAOAAQAXAAAQAPQAPAPgBAXQABAXgPAQQgQAPgXAAQgNAAgNgGgAgRgXQgIAIAAAPQAAAPAIAJQAHAIAKAAQALAAAHgIQAHgJAAgPQAAgPgHgIQgHgIgLAAQgKAAgHAIg");
	this.shape_2.setTransform(115.9,14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AAxA1IAAg7QAAgPgDgEQgEgGgIAAQgGAAgFAEQgFADgCAHQgCAHAAANIAAAyIgbAAIAAg4QAAgPgBgFQgCgEgDgCQgDgCgFAAQgGAAgGAEQgFADgCAGQgCAHAAANIAAAzIgbAAIAAhnIAZAAIAAAPQANgRATAAQAKAAAHAEQAHAEAEAJQAHgJAIgEQAIgEAJAAQAMAAAHAFQAIAEAEAJQADAHAAAOIAABCg");
	this.shape_3.setTransform(100.8,14.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AghA1IAAhnIAaAAIAAAPQAGgKAFgEQAFgDAHAAQAJAAAJAFIgJAYQgHgFgGABQgGgBgEAEQgDADgCAIQgCAJAAAZIAAAgg");
	this.shape_4.setTransform(83.3,14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AglAkQgKgOAAgVQAAgZANgPQAOgOAUAAQAWAAAOAPQANAPgBAfIhDAAQAAAMAGAHQAHAHAIAAQAHAAAEgEQAEgDADgIIAbAEQgFAPgMAIQgLAIgRAAQgaAAgNgSgAgNgaQgGAHAAALIAoAAQAAgMgGgGQgGgGgIAAQgIAAgGAGg");
	this.shape_5.setTransform(73,14.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AgLA0IgqhnIAdAAIAUA0IAEASIADgJIADgJIATg0IAdAAIgpBng");
	this.shape_6.setTransform(61.9,14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgaAwQgNgHgHgMQgGgNgBgRQABgNAGgNQAHgNANgHQAMgGAOAAQAXAAAPAPQAPAPABAXQgBAXgPAQQgPAPgXAAQgNAAgNgGgAgRgXQgHAIgBAPQABAPAHAJQAIAIAJAAQALAAAHgIQAIgJAAgPQAAgPgIgIQgHgIgLAAQgJAAgIAIg");
	this.shape_7.setTransform(50.4,14.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgiAoQgOgPAAgZQAAgZAOgOQANgOAWAAQATAAAMAIQALAIAFARIgcAFQgBgJgFgEQgFgEgHAAQgKAAgGAHQgGAHAAARQAAARAHAIQAGAIAJAAQAIAAAFgFQAFgEACgLIAbAFQgEASgMAKQgMAJgUAAQgWAAgNgOg");
	this.shape_8.setTransform(38.8,14.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgfAuQgMgJgFgPIAcgEQACAIAFAEQAGAEAIAAQALAAAGgEQADgCAAgFQAAgDgCgCQgCgCgHgCQghgHgIgGQgMgIAAgOQAAgOAKgJQALgJAWAAQAVAAAKAHQAKAHAEANIgaAFQgCgGgEgDQgFgEgIAAQgKAAgFADQgDADAAADQAAADACACQAEADAWAFQAWAFAIAHQAIAGAAANQABAPgMAKQgMAKgYAAQgUAAgMgIg");
	this.shape_9.setTransform(27.3,14.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AgNBHIAAhmIAbAAIAABmgAgNguIAAgZIAbAAIAAAZg");
	this.shape_10.setTransform(19.3,13);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("Ag7BHIAAiOIA1AAQARAAAJADQAMAEAJAJQAJAKAGAOQAEANAAAUQAAARgEANQgGAQgKAJQgHAIgNADQgJADgPAAgAgeAwIAVAAQALAAAGgCQAHgBAFgFQAEgEADgKQADgJAAgRQAAgQgDgIQgDgKgFgFQgFgEgJgCQgFgBgRgBIgNAAg");
	this.shape_11.setTransform(9.5,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,143.1,26.4), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#21308D").ss(1,1,1).p("AylAAMAlLAAA");
	this.shape.setTransform(125.5,34.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#21308D").ss(1,1,1).p("AAhAAQAAANgKAJQgKAJgNAAQgNAAgKgJQgJgJAAgNQAAgMAJgJQAKgJANAAQANAAAKAJQAKAJAAAMg");
	this.shape_1.setTransform(3.3,34.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(-1,30.4,246.5,8.3), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00148D").ss(2,1,1).p("AiQgXIEhAv");
	this.shape.setTransform(14.5,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(-1,-1,31,6.9), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#676C8D").s().p("AhOBQQggghgBgvQABguAgghQAhgiAtAAQAuAAAgAiQAiAhAAAuQAAAvgiAhQggAhguAAQgtAAghghg");
	this.shape.setTransform(11.2,11.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,22.3,22.7), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#21308D").ss(2,1,1).p("AApiCIhREF");
	this.shape.setTransform(4.1,13.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(-1,-1,10.2,28.1), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#21308D").ss(2,1,1).p("AAzAAIgzAAIgyAAAAAgyIAAAyIAAAz");
	this.shape.setTransform(24.7,24);

	this.instance = new lib.img_560545();
	this.instance.parent = this;
	this.instance.setTransform(5.3,4.7,0.18,0.18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#21308D").ss(2,1,1).p("AgoAsIBRAAIAAhX");
	this.shape_1.setTransform(45.1,44.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#21308D").ss(2,1,1).p("AApgrIhRAAIAABX");
	this.shape_2.setTransform(4.1,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-1,-1,51.2,50.8), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#21308D").ss(2,1,1).p("Ah/kYID/Ix");
	this.shape.setTransform(12.8,28.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-1,-1,27.7,58.1), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E7D3").s().p("AhOBHQgggdgBgqQABgpAggeQAhgdAtgBQAuABAgAdQAiAeAAApQAAAqgiAdQggAeguABQgtgBghgeg");
	this.shape.setTransform(11.2,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,22.3,20.3), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#21308D").ss(2,1,1).p("AimhFIFNCL");
	this.shape.setTransform(16.7,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-1,-1,35.4,16), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#838ABB").s().p("AhABBQgbgbAAgmQAAglAbgbQAbgbAlAAQAmAAAbAbQAbAbAAAlQAAAmgbAbQgbAbgmAAQglAAgbgbg");
	this.shape.setTransform(9.2,9.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,18.4,18.4), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00148D").ss(2,1,1).p("AlJBgIKTi/");
	this.shape.setTransform(33,9.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-1,-1,68,21.1), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E7D3").s().p("AhHBGQgWgWgGgcQgCgKAAgKQABgoAdgdQAegdApAAQAqAAAdAdQAeAdABAoQgBApgeAdQgdAdgqAAQgpAAgegdg");
	this.shape.setTransform(10.2,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,20.3,19.8), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00148D").ss(2,1,1).p("AkCD8IIFn3");
	this.shape.setTransform(25.9,25.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-1,-1,53.8,52.3), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#555D8D").s().p("AhRBQQgighAAgvQAAguAigiQAighAvAAQAwAAAiAhQAiAiAAAuQAAAvgiAhQgiAigwAAQgvAAgigig");
	this.shape.setTransform(11.6,11.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,23.2,22.8), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00148D").s().p("AgXAZQgKgKAAgPQAAgOAKgLQAKgLANAAQAOAAAKALQAKALAAAOQAAAPgKAKQgKAMgOAAQgNAAgKgMg");
	this.shape.setTransform(8.1,7.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBDBDB").s().p("Ag5A1QgZgWAAgfQAAgeAZgWQAYgWAhAAQAiAAAYAWQAYAWAAAeQAAAfgYAWQgYAWgiAAQghAAgYgWg");
	this.shape_1.setTransform(8.3,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,16.5,15), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AmtAAINbAA");
	this.shape.setTransform(43,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-1,-1,88,2), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#334BA8").s().p("AAmBIQgfAAgWgWQgWgUAAgeQAAgdAWgUQAWgWAfAAIAAAAIAACPg");
	this.shape.setTransform(11.1,14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00148D").s().p("AglhHQAgAAAVAWQAWAUAAAdQAAAegWAUQgVAWggAAg");
	this.shape_1.setTransform(18.7,14.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D1D1D3").s().p("AhaBVQglgkAAgxQAAgwAlgjQAngkAzAAQA1AAAlAkQAlAjAAAwQAAAxglAkQglAjg1AAQgzAAgngjgAgxgyQgXAVAAAdQAAAdAXAVQAWAWAfAAIAAAAQAfAAAXgWQAVgVABgdQgBgdgVgVQgXgVgfAAIAAAAQgfAAgWAVg");
	this.shape_2.setTransform(14.6,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(1.8,2.8,25.5,24), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#838ABB").s().p("AiPAYQg7gKgBgOQABgNA7gKQA8gKBTAAQBUAAA8AKQA8AKgBANQABAOg8AKQg8AKhUAAQhTAAg8gKg");
	this.shape.setTransform(25,52.2);

	this.instance = new lib.Symbol23();
	this.instance.parent = this;
	this.instance.setTransform(24.6,24.4,1,1,0,0,0,24.6,24.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9B9B9B").s().p("AhsBqQgsgrAAg/QAAg+AsgsQAugsA+AAQBAAAAsAsQAtAsAAA+QAAA/gtArQgsAthAAAQg+AAgugtg");
	this.shape_1.setTransform(24.7,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(-1,-1,51.2,56.6), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{s1:2,s2:33});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_57 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(23).call(this.frame_24).wait(33).call(this.frame_57).wait(1));

	// Layer_1
	this.instance = new lib.Symbol25();
	this.instance.parent = this;
	this.instance.setTransform(24.6,41.3,1,1,0,0,0,24.6,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:8.5,y:32.7},22).wait(9).to({x:24.6,y:41.3},24).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33.7,13.1,1,1,0,0,0,4.1,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({regX:4.2,regY:13,rotation:21.2,x:29.4,y:10.7},22).wait(9).to({regX:4.1,regY:13.1,rotation:0,x:33.7,y:13.1},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,51.2,73.4);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"s1":2,"s2":33});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_57 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(23).call(this.frame_24).wait(33).call(this.frame_57).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#21308D").ss(1,1,1).p("AAACfIAAk+");
	this.shape.setTransform(244.5,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#21308D").ss(1,1,1).p("AAAADIAAgF");
	this.shape_1.setTransform(244.5,31.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#21308D").ss(1,1,1).p("AAAgPIAAAf");
	this.shape_2.setTransform(244.5,30.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#21308D").ss(1,1,1).p("AAAgVIAAAr");
	this.shape_3.setTransform(244.5,30);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#21308D").ss(1,1,1).p("AAAgbIAAA3");
	this.shape_4.setTransform(244.5,29.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#21308D").ss(1,1,1).p("AAAghIAABE");
	this.shape_5.setTransform(244.5,28.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#21308D").ss(1,1,1).p("AAAgoIAABR");
	this.shape_6.setTransform(244.5,28);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#21308D").ss(1,1,1).p("AAAguIAABd");
	this.shape_7.setTransform(244.5,27.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#21308D").ss(1,1,1).p("AAAg0IAABp");
	this.shape_8.setTransform(244.5,26.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#21308D").ss(1,1,1).p("AAAg6IAAB1");
	this.shape_9.setTransform(244.5,26.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#21308D").ss(1,1,1).p("AAAhBIAACD");
	this.shape_10.setTransform(244.5,25.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#21308D").ss(1,1,1).p("AAAhHIAACP");
	this.shape_11.setTransform(244.5,24.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#21308D").ss(1,1,1).p("AAAhNIAACb");
	this.shape_12.setTransform(244.5,24.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#21308D").ss(1,1,1).p("AAAhUIAACp");
	this.shape_13.setTransform(244.5,23.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#21308D").ss(1,1,1).p("AAAhaIAAC1");
	this.shape_14.setTransform(244.5,22.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#21308D").ss(1,1,1).p("AAAhgIAADB");
	this.shape_15.setTransform(244.5,22.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#21308D").ss(1,1,1).p("AAAhmIAADN");
	this.shape_16.setTransform(244.5,21.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#21308D").ss(1,1,1).p("AAAhtIAADb");
	this.shape_17.setTransform(244.5,20.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#21308D").ss(1,1,1).p("AAAhzIAADn");
	this.shape_18.setTransform(244.5,20.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#21308D").ss(1,1,1).p("AAAh5IAADz");
	this.shape_19.setTransform(244.5,19.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#21308D").ss(1,1,1).p("AAAh/IAAD/");
	this.shape_20.setTransform(244.5,19);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#21308D").ss(1,1,1).p("AAAiFIAAEM");
	this.shape_21.setTransform(244.5,18.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#21308D").ss(1,1,1).p("AAAiMIAAEZ");
	this.shape_22.setTransform(244.5,17.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#21308D").ss(1,1,1).p("AAAiSIAAEl");
	this.shape_23.setTransform(244.5,17.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#21308D").ss(1,1,1).p("AAAiYIAAEx");
	this.shape_24.setTransform(244.5,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleY:1,y:15.8}}]}).to({state:[{t:this.shape,p:{scaleY:1,y:15.8}}]},2).to({state:[]},1).to({state:[{t:this.shape_1}]},21).to({state:[{t:this.shape,p:{scaleY:0.059,y:31.2}}]},9).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape,p:{scaleY:1,y:15.8}}]},1).wait(1));

	// Layer_3
	this.instance = new lib.Symbol29();
	this.instance.parent = this;
	this.instance.setTransform(161,13.2,1,1,0,0,0,71.5,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:131},22).wait(9).to({x:161},24).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(122.3,16.3,1,1,0,0,0,122.3,19.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({regX:122.2,scaleX:1.11,x:108.6},22).wait(9).to({regX:122.3,scaleX:1,x:122.3},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-1.2,246,36.6);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"s1":2,"s2":33});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_57 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(23).call(this.frame_24).wait(33).call(this.frame_57).wait(1));

	// Layer_2
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(35.3,14.5,1,1,0,0,0,9.2,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:45.7,y:15.4},22).wait(9).to({x:35.3,y:14.5},24).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.6,7,1,1,0,0,0,16.6,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({scaleX:1.34,x:22.3},22).wait(9).to({scaleX:1,x:16.6},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,45.5,24.7);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"s1":2,"s2":33});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_57 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(23).call(this.frame_24).wait(33).call(this.frame_57).wait(1));

	// Layer_2
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(29.5,63.8,1,1,0,0,0,11.2,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:44.6,y:57.2},22).wait(9).to({x:29.5,y:63.8},24).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(12.8,28.1,1,1,0,0,0,12.8,28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({rotation:-12.7,x:18.7,y:24.6},22).wait(9).to({rotation:0,x:12.8,y:28.1},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,41.6,74.9);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"s1":2,"s2":33});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_57 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(23).call(this.frame_24).wait(33).call(this.frame_57).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E7D3").s().p("AhHBGQgWgWgGgcQgCgKAAgKQABgoAdgdQAegdApAAQAqAAAdAdQAeAdABAoQgBApgeAdQgdAdgqAAQgpAAgegdg");
	this.shape.setTransform(75.4,9.9);

	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(75.5,9.9,1,1,0,0,0,10.2,9.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},22).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},24).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({x:49.9,y:15.6},22).wait(9).to({x:75.5,y:9.9},24).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00148D").ss(2,1,1).p("AlJBfIKTi+");
	this.shape_1.setTransform(33,21.9);

	this.instance_1 = new lib.Symbol17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33,22,1,1,0,0,0,33,9.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},22).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},24).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({scaleX:0.79,scaleY:0.7,x:25.9,y:24.8},22).wait(9).to({scaleX:1,scaleY:1,x:33,y:22},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,86.6,32.5);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"s1":2,"s2":33});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_57 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(23).call(this.frame_24).wait(33).call(this.frame_57).wait(1));

	// Layer_2
	this.instance = new lib.Symbol26();
	this.instance.parent = this;
	this.instance.setTransform(11.2,11.3,1,1,0,0,0,11.2,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:3,y:8.3},22).wait(9).to({x:11.2,y:11.3},24).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34.3,15.9,1,1,0,0,0,14.5,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({regX:14.6,regY:2.5,scaleX:1.22,scaleY:1.3,rotation:2.2,x:31.4,y:14.6},22).wait(9).to({regX:14.5,regY:2.4,scaleX:1,scaleY:1,rotation:0,x:34.3,y:15.9},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.8,22.7);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"s1":2,"s2":33});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_57 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(23).call(this.frame_24).wait(33).call(this.frame_57).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#555D8D").s().p("AhRBQQgighAAgvQAAguAigiQAighAvAAQAwAAAiAhQAiAiAAAuQAAAvgiAhQgiAigwAAQgvAAgigig");
	this.shape.setTransform(58,11.4);

	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(58,11.4,1,1,0,0,0,11.6,11.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},22).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},24).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({x:40.9,y:27.6},22).wait(9).to({x:58,y:11.4},24).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00148D").ss(2,1,1).p("AkCD8IIFn3");
	this.shape_1.setTransform(25.9,42.7);

	this.instance_1 = new lib.Symbol15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25.9,42.7,1,1,0,0,0,25.9,25.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},22).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},24).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({scaleX:0.8,scaleY:0.83,x:20.7,y:47},22).wait(9).to({scaleX:1,scaleY:1,x:25.9,y:42.7},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,70.6,68.8);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(43.5,21.6,1,1,0,0,0,43,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AGuAAIAFAAAmyAAIAEAA");
	this.shape.setTransform(43.6,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9E9E4").s().p("AmtADIgDgDIADgBQGumlGuGlIACABIgDADQjXDRjXAAQjWAAjXjRg");
	this.shape_1.setTransform(43.5,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-0.9,0,89,42.5), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"s1":2,"s2":34});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}
	this.frame_57 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(24).call(this.frame_25).wait(32).call(this.frame_57).wait(1));

	// Layer_2
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(44.5,21,1,1,0,0,0,16,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:55.9},5).to({x:45.5,y:27.7},7).to({x:35,y:25.8},6).to({x:44.5,y:21},5).wait(9).to({x:32.5,y:25},6).to({x:52.5,y:23},6).to({x:54.5,y:19},6).to({x:44.5,y:21},5).wait(1));

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AmthoINbAAQjXDRjXAAQjWAAjXjRg");
	var mask_graphics_2 = new cjs.Graphics().p("AmthoINbAAQjXDRjXAAQjWAAjXjRg");
	var mask_graphics_3 = new cjs.Graphics().p("AmthbINbAAQjXC3jXAAQjWAAjXi3g");
	var mask_graphics_4 = new cjs.Graphics().p("AmthPINbAAQjXCfjXAAQjWAAjXifg");
	var mask_graphics_5 = new cjs.Graphics().p("AmthDINbAAQjXCHjXAAQjWAAjXiHg");
	var mask_graphics_6 = new cjs.Graphics().p("Amtg3INbAAQjXBvjXAAQjWAAjXhvg");
	var mask_graphics_7 = new cjs.Graphics().p("AmtgqINbAAQjXBVjXAAQjWAAjXhVg");
	var mask_graphics_8 = new cjs.Graphics().p("AmtgeINbAAQjXA9jXAAQjWAAjXg9g");
	var mask_graphics_9 = new cjs.Graphics().p("AmtgSINbAAQjXAljXAAQjWAAjXglg");
	var mask_graphics_10 = new cjs.Graphics().p("AmtggINbAAQjXBBjXAAQjWAAjXhBg");
	var mask_graphics_11 = new cjs.Graphics().p("AmtguINbAAQjXBdjXAAQjWAAjXhdg");
	var mask_graphics_12 = new cjs.Graphics().p("Amtg9INbAAQjXB7jXAAQjWAAjXh7g");
	var mask_graphics_13 = new cjs.Graphics().p("AmthLINbAAQjXCXjXAAQjWAAjXiXg");
	var mask_graphics_14 = new cjs.Graphics().p("AmthZINbAAQjXCzjXAAQjWAAjXizg");
	var mask_graphics_15 = new cjs.Graphics().p("AmthoINbAAQjXDRjXAAQjWAAjXjRg");
	var mask_graphics_34 = new cjs.Graphics().p("AmthoINbAAQjXDRjXAAQjWAAjXjRg");
	var mask_graphics_35 = new cjs.Graphics().p("AmthbINbAAQjXC3jXAAQjWAAjXi3g");
	var mask_graphics_36 = new cjs.Graphics().p("AmthPINbAAQjXCfjXAAQjWAAjXifg");
	var mask_graphics_37 = new cjs.Graphics().p("AmthDINbAAQjXCHjXAAQjWAAjXiHg");
	var mask_graphics_38 = new cjs.Graphics().p("Amtg3INbAAQjXBvjXAAQjWAAjXhvg");
	var mask_graphics_39 = new cjs.Graphics().p("AmtgqINbAAQjXBVjXAAQjWAAjXhVg");
	var mask_graphics_40 = new cjs.Graphics().p("AmtgeINbAAQjXA9jXAAQjWAAjXg9g");
	var mask_graphics_41 = new cjs.Graphics().p("AmtgSINbAAQjXAljXAAQjWAAjXglg");
	var mask_graphics_42 = new cjs.Graphics().p("AmtggINbAAQjXBBjXAAQjWAAjXhBg");
	var mask_graphics_43 = new cjs.Graphics().p("AmtguINbAAQjXBdjXAAQjWAAjXhdg");
	var mask_graphics_44 = new cjs.Graphics().p("Amtg9INbAAQjXB7jXAAQjWAAjXh7g");
	var mask_graphics_45 = new cjs.Graphics().p("AmthLINbAAQjXCXjXAAQjWAAjXiXg");
	var mask_graphics_46 = new cjs.Graphics().p("AmthZINbAAQjXCzjXAAQjWAAjXizg");
	var mask_graphics_47 = new cjs.Graphics().p("AmthoINbAAQjXDRjXAAQjWAAjXjRg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:43.5,y:32}).wait(2).to({graphics:mask_graphics_2,x:43.5,y:32}).wait(1).to({graphics:mask_graphics_3,x:43.5,y:30.7}).wait(1).to({graphics:mask_graphics_4,x:43.5,y:29.5}).wait(1).to({graphics:mask_graphics_5,x:43.5,y:28.2}).wait(1).to({graphics:mask_graphics_6,x:43.5,y:26.9}).wait(1).to({graphics:mask_graphics_7,x:43.5,y:25.6}).wait(1).to({graphics:mask_graphics_8,x:43.5,y:24.3}).wait(1).to({graphics:mask_graphics_9,x:43.5,y:23}).wait(1).to({graphics:mask_graphics_10,x:43.5,y:24.5}).wait(1).to({graphics:mask_graphics_11,x:43.5,y:26}).wait(1).to({graphics:mask_graphics_12,x:43.5,y:27.5}).wait(1).to({graphics:mask_graphics_13,x:43.5,y:29}).wait(1).to({graphics:mask_graphics_14,x:43.5,y:30.5}).wait(1).to({graphics:mask_graphics_15,x:43.5,y:32}).wait(1).to({graphics:null,x:0,y:0}).wait(18).to({graphics:mask_graphics_34,x:43.5,y:32}).wait(1).to({graphics:mask_graphics_35,x:43.5,y:30.7}).wait(1).to({graphics:mask_graphics_36,x:43.5,y:29.5}).wait(1).to({graphics:mask_graphics_37,x:43.5,y:28.2}).wait(1).to({graphics:mask_graphics_38,x:43.5,y:26.9}).wait(1).to({graphics:mask_graphics_39,x:43.5,y:25.6}).wait(1).to({graphics:mask_graphics_40,x:43.5,y:24.3}).wait(1).to({graphics:mask_graphics_41,x:43.5,y:23}).wait(1).to({graphics:mask_graphics_42,x:43.5,y:24.5}).wait(1).to({graphics:mask_graphics_43,x:43.5,y:26}).wait(1).to({graphics:mask_graphics_44,x:43.5,y:27.5}).wait(1).to({graphics:mask_graphics_45,x:43.5,y:29}).wait(1).to({graphics:mask_graphics_46,x:43.5,y:30.5}).wait(1).to({graphics:mask_graphics_47,x:43.5,y:32}).wait(1).to({graphics:null,x:0,y:0}).wait(10));

	// Layer_1
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.5,21.3,1,1,0,0,0,43.5,21.3);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(58));

	// Layer_3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AmtBsIgDgDIADgCQGumkGuGkIACACIgDADg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AmtBsIgDgDIADgCQGumkGuGkIACACIgDADg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AmrBdIACgCQGclfGZE6QASATAOASIh0AAQkglekfE6IgIAHIglAdIgBADIh0ABIgCgCg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AmoBQIACgBQGfkxGdESQALAQAIAOIjoABQiokxioETIgGAGIgnAXIgCADIjnABIgDgCg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AmkBEIACgBQGikCGgDpQAEANABALIlbACQgwkEgxDqIgFAFIgnATIgCACIlcABIgDgBg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AmlA3IACAAQGljUGkDBQgEAKgGAJIlvABIACgBIAogPIAFgDQhGjChHDVIgBAAIlxABIgCgCg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AmoArIABgBQGpikGnCYIgYANIjyAAIABAAIAqgKIADgDQi9iYi/ClIgCAAIj1ABIgCgBg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AmsBuIgDAAIADgBQGuhIGuBIIACABIgDAAg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AmqAhIgCAAIACgBIABAAQGqh+GqB3IACAAIgCABIgjAHIgBAAIgEAAg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AmmAwIgCgBIACAAIABgBQGmi0GmCmIACAAIgBACIAAAAIgTANIgBAAIgEABg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AmiA/IgCgBIgBAAIACgCIACAAQGijqGiDVIACAAIABACIgBAAIgFATIAAACIgDABg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AmkBOIgCgCIgBAAIACgBIACgBQGfkgGeEEIABABIABACIALAZIAAACIgDACg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AmpBdIgCgCIAAgBIABgBIABgBQGclWGaEzIACABIACACIAAAAIAaAgIABACIgDADg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AmtBsIgDgDIADgCQGumkGuGkIACACIgDADg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AmtBsIgDgDIADgCQGumkGuGkIACACIgDADg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AmrBdIACgCQGclfGZE6QASATAOASIh0AAQkglekfE6IgIAHIglAdIgBADIh0ABIgCgCg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AmoBQIACgBQGfkxGdESQALAQAIAOIjoABQiokxioETIgGAGIgnAXIgCADIjnABIgDgCg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AmkBEIACgBQGikCGgDpQAEANABALIlbACQgwkEgxDqIgFAFIgnATIgCACIlcABIgDgBg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AmlA3IACAAQGljUGkDBQgEAKgGAJIlvABIACgBIAogPIAFgDQhGjChHDVIgBAAIlxABIgCgCg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AmoArIABgBQGpikGnCYIgYANIjyAAIABAAIAqgKIADgDQi9iYi/ClIgCAAIj1ABIgCgBg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AmsBuIgDAAIADgBQGuhIGuBIIACABIgDAAg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AkbAhIACAAQCXhBCUAAIAAAAIABAAQCKAACKA3IABABIAEABIgDACIgpAGIApgGIADgCIgEgBIgBgBQiKg3iKAAIgBAAIAAAAQiUAAiXBBIgCAAIAAAAIiOAAIgCAAIACgBQGrh+GqB3IgjAIIiJAAIgBAAIgfAAIn6AAg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AmnAvIACAAQGni1GmCmIgSAPIkdAAIACAAIApgMIADgDQiVimiXC1IgCABIAAAAIkeAAIgCgBg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AmjA9IAAAAIACgBQGjjqGiDVQAAALgCAKImVACIAAAAIAAgBIABgLIgWAKIgCACImXABIgCgCgAAOAyIAQgHIAFgEQgKjQgLDbIAAAAg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AmmBMIAAAAIACgBQGgkhGeEEIANAcIkNACQiAkiiBEFIgGAFIgmAWIgCADIkPABIgCgCg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AmqBbIgBgBIACgBQGdlXGaEzIAdAjIiHABQkMlXkLE0IgHAGIgmAcIgBAEIiHABIgCgCg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AmtBsIgDgDIADgCQGumkGuGkIACACIgDADg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:43.5,y:10.8}).wait(2).to({graphics:mask_1_graphics_2,x:43.5,y:10.8}).wait(1).to({graphics:mask_1_graphics_3,x:43,y:12.1}).wait(1).to({graphics:mask_1_graphics_4,x:42.7,y:13.5}).wait(1).to({graphics:mask_1_graphics_5,x:42.3,y:14.8}).wait(1).to({graphics:mask_1_graphics_6,x:42.4,y:16.1}).wait(1).to({graphics:mask_1_graphics_7,x:42.8,y:17.5}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_9,x:43.4,y:11}).wait(1).to({graphics:mask_1_graphics_10,x:43.1,y:18.6}).wait(1).to({graphics:mask_1_graphics_11,x:42.7,y:17}).wait(1).to({graphics:mask_1_graphics_12,x:42.4,y:15.5}).wait(1).to({graphics:mask_1_graphics_13,x:42.6,y:13.9}).wait(1).to({graphics:mask_1_graphics_14,x:43,y:12.4}).wait(1).to({graphics:mask_1_graphics_15,x:43.5,y:10.8}).wait(1).to({graphics:null,x:0,y:0}).wait(18).to({graphics:mask_1_graphics_34,x:43.5,y:10.8}).wait(1).to({graphics:mask_1_graphics_35,x:43,y:12.1}).wait(1).to({graphics:mask_1_graphics_36,x:42.7,y:13.5}).wait(1).to({graphics:mask_1_graphics_37,x:42.3,y:14.8}).wait(1).to({graphics:mask_1_graphics_38,x:42.4,y:16.1}).wait(1).to({graphics:mask_1_graphics_39,x:42.8,y:17.5}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_41,x:43.4,y:11}).wait(1).to({graphics:mask_1_graphics_42,x:43,y:18.6}).wait(1).to({graphics:mask_1_graphics_43,x:42.6,y:17}).wait(1).to({graphics:mask_1_graphics_44,x:42.2,y:15.5}).wait(1).to({graphics:mask_1_graphics_45,x:42.5,y:13.9}).wait(1).to({graphics:mask_1_graphics_46,x:43,y:12.4}).wait(1).to({graphics:mask_1_graphics_47,x:43.5,y:10.8}).wait(1).to({graphics:null,x:0,y:0}).wait(10));

	// Layer_1
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(43.5,21.3,1,1,0,0,0,43.5,21.3);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(58));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87,42.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("AgvBEQgTgNgGgWIAqgGQACAMAIAGQAIAHAOAAQAQAAAIgGQAFgEAAgHQAAgFgDgDQgDgDgKgCQgxgLgOgKQgSgLAAgXQAAgUAQgOQAQgNAhAAQAfAAAQAKQAPAKAGAVIgmAHQgDgJgHgFQgHgFgMAAQgQAAgHAFQgFADAAAFQAAAFAEADQAGAEAgAHQAhAIANALQANAJAAAUQAAAWgSAPQgSAPgjAAQgfAAgSgNg");
	this.shape.setTransform(1038.2,153.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AgxBQIAAibIAmAAIAAAWQAKgPAGgGQAIgEAKAAQAOAAANAHIgMAkQgLgGgJgBQgIABgGAEQgFAFgEAMQgDANAAAmIAAAxg");
	this.shape_1.setTransform(1025.6,153.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("Ag4A3QgQgVAAghQAAgmAUgVQAVgWAfAAQAhAAAUAXQAUAXAAAuIhnAAQABASAJAKQAKALANAAQAKAAAGgGQAHgFADgMIApAHQgIAXgRAMQgRALgZAAQgoAAgTgagAgUgnQgJAKAAARIA9AAQgBgSgJgJQgIgKgNAAQgMAAgJAKg");
	this.shape_2.setTransform(1010.1,153.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("Ag4A3QgQgVAAghQAAgmAUgVQAVgWAfAAQAhAAAUAXQAUAXAAAuIhnAAQABASAJAKQAKALANAAQAKAAAGgGQAHgFADgMIApAHQgIAXgRAMQgRALgZAAQgoAAgTgagAgUgnQgJAKAAARIA9AAQgBgSgJgJQgIgKgNAAQgMAAgJAKg");
	this.shape_3.setTransform(993.4,153.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgxBQIAAibIAmAAIAAAWQAKgPAGgGQAIgEAKAAQAOAAANAHIgMAkQgLgGgJgBQgIABgGAEQgFAFgEAMQgDANAAAmIAAAxg");
	this.shape_4.setTransform(980.5,153.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("Ag6BEQgOgNAAgUQAAgNAGgKQAHgLALgEQALgGAWgEQAbgFAMgFIAAgEQAAgMgGgFQgGgFgPAAQgLAAgGAFQgGAEgEALIglgHQAGgXAPgKQAPgLAfAAQAaAAAOAGQANAHAGAKQAGAKAAAbIgBAvQAAAUACAKQACAKAFALIgpAAIgDgMIgCgFQgKAKgMAFQgLAFgOAAQgYAAgOgNgAAAAJQgSAEgEAEQgJAFABAJQAAAJAGAGQAGAGAKAAQALAAAKgHQAHgGADgIQABgFAAgPIAAgIIgYAGg");
	this.shape_5.setTransform(965.2,153.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AhBBSQgcgdAAgzQAAg1AcgdQAcgeAsAAQAnAAAZAYQAPANAHAaIgrAKQgEgQgMgKQgMgKgRAAQgXAAgPARQgPASAAAmQAAAnAPASQAOARAXAAQARAAANgLQAMgLAFgXIArANQgKAjgXARQgWARgjAAQgpAAgcgdg");
	this.shape_6.setTransform(945.9,150.4);

	this.mv_8 = new lib.Symbol12();
	this.mv_8.name = "mv_8";
	this.mv_8.parent = this;
	this.mv_8.setTransform(894.9,211.4,1,1,0,0,0,122.3,17.4);

	this.mv_6 = new lib.Symbol22();
	this.mv_6.name = "mv_6";
	this.mv_6.parent = this;
	this.mv_6.setTransform(783.4,210.3,1,1,0,0,0,24.6,32.8);

	this.mv_1 = new lib.Symbol13();
	this.mv_1.name = "mv_1";
	this.mv_1.parent = this;
	this.mv_1.setTransform(774.7,125,1,1,0,0,0,43.5,21.3);

	this.mv_4 = new lib.Symbol10();
	this.mv_4.name = "mv_4";
	this.mv_4.parent = this;
	this.mv_4.setTransform(825.1,184.4,1,1,0,0,0,21.8,11.3);

	this.mv_5 = new lib.Symbol9();
	this.mv_5.name = "mv_5";
	this.mv_5.parent = this;
	this.mv_5.setTransform(819.7,212.5,1,1,0,0,0,19.8,36.5);

	this.mv_3 = new lib.Symbol8();
	this.mv_3.name = "mv_3";
	this.mv_3.parent = this;
	this.mv_3.setTransform(845.6,154,1,1,0,0,0,42.3,16.2);

	this.mv_7 = new lib.Symbol7();
	this.mv_7.name = "mv_7";
	this.mv_7.parent = this;
	this.mv_7.setTransform(771.1,163.2,1,1,0,0,0,24.9,11.3);

	this.mv_2 = new lib.Symbol6();
	this.mv_2.name = "mv_2";
	this.mv_2.parent = this;
	this.mv_2.setTransform(836.6,133,1,1,0,0,0,34.3,34.4);

	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(797.7,170.3,1,1,0,0,0,8.3,7.5);

	this.mic = new lib.Symbol30();
	this.mic.name = "mic";
	this.mic.parent = this;
	this.mic.setTransform(801.3,166.7,1,1,0,0,0,125.2,123);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mic},{t:this.instance},{t:this.mv_2},{t:this.mv_7},{t:this.mv_3},{t:this.mv_5},{t:this.mv_4},{t:this.mv_1},{t:this.mv_6},{t:this.mv_8},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EEEFE4").s().p("EhiCAz4MAAAhnvMDEFAAAMAAABnvg");
	this.shape_7.setTransform(627.5,332);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1255,664), null);


// stage content:
(lib.Web = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		stage.enableDOMEvents(true);
		createjs.Touch.enable(stage);
		createjs.Ticker.framerate = 24;
		stage.enableMouseOver(20);
		
		this.main_MC.mic.addEventListener("rollover", rolloverd.bind(this));
		this.main_MC.mic.addEventListener("rollout", rolloutd.bind(this));
		this.main_MC.mic.mouseEnabled = true;
		this.main_MC.mic.cursor = "pointer";
		
		
		function rolloverd(evt) {
			this.main_MC.mv_1.gotoAndPlay("s1");
			this.main_MC.mv_2.gotoAndPlay("s1");
			this.main_MC.mv_3.gotoAndPlay("s1");
			this.main_MC.mv_4.gotoAndPlay("s1");
			this.main_MC.mv_5.gotoAndPlay("s1");
			this.main_MC.mv_6.gotoAndPlay("s1");
			this.main_MC.mv_7.gotoAndPlay("s1");
			this.main_MC.mv_8.gotoAndPlay("s1");
			
		}
		
		function rolloutd(evt) {
			this.main_MC.mv_1.gotoAndPlay("s2");
			this.main_MC.mv_2.gotoAndPlay("s2");
			this.main_MC.mv_3.gotoAndPlay("s2");
			this.main_MC.mv_4.gotoAndPlay("s2");
			this.main_MC.mv_5.gotoAndPlay("s2");
			this.main_MC.mv_6.gotoAndPlay("s2");
			this.main_MC.mv_7.gotoAndPlay("s2");
			this.main_MC.mv_8.gotoAndPlay("s2");
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bg
	this.main_MC = new lib.Symbol1();
	this.main_MC.name = "main_MC";
	this.main_MC.parent = this;
	this.main_MC.setTransform(627.5,332,1,1,0,0,0,627.5,332);

	this.timeline.addTween(cjs.Tween.get(this.main_MC).wait(1));

	// Layer_1
	this.instance = new lib.Capture();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(627.5,332,1255,664);
// library properties:
lib.properties = {
	id: 'DF18643F69A4434B915E9A2DF933899C',
	width: 1255,
	height: 664,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Web_atlas_.png?1600845872520", id:"Web_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DF18643F69A4434B915E9A2DF933899C'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;