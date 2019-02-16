
import * as babylon from "babylonjs"

window.addEventListener('DOMContentLoaded', function () {
	// get the canvas DOM element
	var canvas = document.getElementById('renderCanvas') as HTMLCanvasElement

	// load the 3D engine
	var engine = new babylon.Engine(canvas, true)

	// createScene function that creates and return the scene
	var createScene = function () {
		// create a basic BJS Scene object
		var scene = new babylon.Scene(engine);

		// create a FreeCamera, and set its position to (x:0, y:5, z:-10)
		var camera = new babylon.FreeCamera('camera1', new babylon.Vector3(0, 5, -10), scene);

		// target the camera to scene origin
		camera.setTarget(babylon.Vector3.Zero());

		// attach the camera to the canvas
		camera.attachControl(canvas, false);

		// create a basic light, aiming 0,1,0 - meaning, to the sky
		var light = new babylon.HemisphericLight('light1', new babylon.Vector3(0, 1, 0), scene);

		// create a built-in "sphere" shape; its constructor takes 6 params: name, segment, diameter, scene, updatable, sideOrientation 
		var sphere = babylon.Mesh.CreateSphere('sphere1', 16, 2, scene);

		// move the sphere upward 1/2 of its height
		sphere.position.y = 1;

		// create a built-in "ground" shape;
		var ground = babylon.Mesh.CreateGround('ground1', 6, 6, 2, scene);

		// return the created scene
		return scene;
	}

	// call the createScene function
	var scene = createScene();

	// run the render loop
	engine.runRenderLoop(function () {
		scene.render();
	});

	// the canvas/window resize event handler
	window.addEventListener('resize', function () {
		engine.resize();
	});
});
