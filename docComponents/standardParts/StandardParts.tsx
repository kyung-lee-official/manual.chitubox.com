import { useState, useRef, useEffect } from "react";
import { PerspectiveCamera } from "three";
import { damp, mapLinear } from "three/src/math/MathUtils";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";
import { animate, motion, useInView } from "framer-motion";

function CameraAnimation() {
	const [started, setStarted] = useState(false);
	const xRef = useRef<number>(0);

	useEffect(() => {
		setStarted(true);
	});

	useFrame((state, delta) => {
		xRef.current += delta * 0.1;
		if (started) {
			(state.camera as PerspectiveCamera).setFocalLength(50);
			state.camera.position.set(
				Math.sin(xRef.current) * 10,
				damp(
					state.camera.position.y,
					mapLinear(state.mouse.y, -1, 1, 0, 10),
					1,
					delta
				),
				Math.cos(xRef.current) * 10
			);
			state.camera.lookAt(0, 0, 0);
		}
	});

	return null;
}

const Scene = () => {
	const { nodes } = useGLTF("/models/standardParts.glb") as any;

	const rotationFactor = 0.3;
	const mesh0 = useRef<THREE.Mesh>(null!);
	const mesh1 = useRef<THREE.Mesh>(null!);
	const mesh2 = useRef<THREE.Mesh>(null!);
	const mesh3 = useRef<THREE.Mesh>(null!);
	const mesh4 = useRef<THREE.Mesh>(null!);
	const mesh5 = useRef<THREE.Mesh>(null!);
	const mesh6 = useRef<THREE.Mesh>(null!);
	const mesh7 = useRef<THREE.Mesh>(null!);
	const mesh8 = useRef<THREE.Mesh>(null!);
	const mesh9 = useRef<THREE.Mesh>(null!);
	const mesh10 = useRef<THREE.Mesh>(null!);

	useFrame((state, delta, xrFrame) => {
		// This function runs at the native refresh rate inside of a shared render-loop
		mesh0.current.rotation.y += delta * rotationFactor * 0.14;
		mesh1.current.rotation.x += delta * rotationFactor;
		mesh1.current.rotation.y += delta * rotationFactor;
		mesh2.current.rotation.x += delta * rotationFactor;
		mesh2.current.rotation.y += delta * rotationFactor;
		mesh3.current.rotation.x += delta * rotationFactor;
		mesh3.current.rotation.y += delta * rotationFactor;
		mesh4.current.rotation.x += delta * rotationFactor;
		mesh4.current.rotation.y += delta * rotationFactor;
		mesh4.current.rotation.x += delta * rotationFactor;
		mesh5.current.rotation.y += delta * rotationFactor;
		mesh5.current.rotation.x += delta * rotationFactor;
		mesh6.current.rotation.y += delta * rotationFactor;
		mesh6.current.rotation.x += delta * rotationFactor;
		mesh7.current.rotation.y += delta * rotationFactor;
		mesh7.current.rotation.x += delta * rotationFactor;
		mesh8.current.rotation.y += delta * rotationFactor;
		mesh8.current.rotation.x += delta * rotationFactor;
		mesh9.current.rotation.y += delta * rotationFactor;
		mesh9.current.rotation.x += delta * rotationFactor;
		mesh10.current.rotation.y += delta * rotationFactor;
		mesh10.current.rotation.x += delta * rotationFactor;
	});

	return (
		<>
			<mesh
				ref={mesh0}
				geometry={nodes["Logo"].geometry}
				position={[0, 0.5, 0]}
			>
				<meshStandardMaterial color={"skyblue"} flatShading={true} />
			</mesh>
			<mesh
				ref={mesh1}
				geometry={nodes["Hexagonal_pyramid（H20xD20）"].geometry}
				position={[-0.529084, 0.153614, 1.5222]}
			>
				<meshStandardMaterial color={"#e0f2fe"} flatShading={true} />
			</mesh>
			<mesh
				ref={mesh2}
				geometry={nodes["M8螺母"].geometry}
				position={[1.60676, 0.327456, 0.299262]}
			>
				<meshStandardMaterial color={"#e0f2fe"} flatShading={true} />
			</mesh>
			<mesh
				ref={mesh3}
				geometry={nodes["M8螺钉"].geometry}
				position={[-1.17795, 0.697008, 1.16189]}
			>
				<meshStandardMaterial color={"#e0f2fe"} flatShading={true} />
			</mesh>
			<mesh
				ref={mesh4}
				geometry={nodes["Slot_head_screwdriver"].geometry}
				position={[0.369563, 0.375288, 1.43742]}
			>
				<meshStandardMaterial color={"#e0f2fe"} flatShading={true} />
			</mesh>
			<mesh
				ref={mesh5}
				geometry={nodes["Tweezers"].geometry}
				position={[0.13673, 0.397227, -1.30705]}
			>
				<meshStandardMaterial color={"#e0f2fe"} flatShading={true} />
			</mesh>
			<mesh
				ref={mesh6}
				geometry={nodes["cylinder（H20xD20）"].geometry}
				position={[1.22626, 0.299218, 1.10928]}
			>
				<meshStandardMaterial color={"#e0f2fe"} flatShading={true} />
			</mesh>
			<mesh
				ref={mesh7}
				geometry={nodes["hilbert_cube(18x18x18)_"].geometry}
				position={[1.18037, 0.352071, -0.828142]}
			>
				<meshStandardMaterial color={"#e0f2fe"} flatShading={true} />
			</mesh>
			<mesh
				ref={mesh8}
				geometry={nodes["klein_bottle（H30）"].geometry}
				position={[-0.927996, 0.394111, -1.10855]}
			>
				<meshStandardMaterial color={"#e0f2fe"} flatShading={true} />
			</mesh>
			<mesh
				ref={mesh9}
				geometry={nodes["sphere（D20）"].geometry}
				position={[-1.53653, 0.425614, 0.511098]}
			>
				<meshStandardMaterial color={"#e0f2fe"} flatShading={true} />
			</mesh>
			<mesh
				ref={mesh10}
				geometry={nodes["直齿轮（压力角20°·模数10）"].geometry}
				position={[-1.55288, 0.398647, -0.353499]}
			>
				<meshStandardMaterial color={"#e0f2fe"} flatShading={true} />
			</mesh>
		</>
	);
};

export const StandardParts = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		margin: "0px 0px -350px 0px",
		once: true,
	});

	useEffect(() => {
		if (isInView) {
			animate("#standardParts", { opacity: [0, 1] }, { duration: 3 });
		}
	}, [isInView]);

	return (
		<motion.div
			ref={ref}
			id="standardParts"
            initial={{ opacity: 0 }}
			className="h-48 xl:h-96"
		>
			<Canvas className="h-48 xl:h-96">
				<CameraAnimation />
				{/* <OrbitControls makeDefault /> */}
				<Scene />
				<rectAreaLight
					intensity={1.2}
					position={[0, 5, 0]}
					width={60}
					height={60}
					rotation={[-Math.PI / 2, 0, 0]}
				/>
				<ambientLight intensity={0.1} />
				{/* <axesHelper position={[0, 0, 0]} /> */}
			</Canvas>
		</motion.div>
	);
};
