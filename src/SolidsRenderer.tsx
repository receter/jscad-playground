import { Canvas } from "@react-three/fiber";
import React, { useMemo } from "react";
import * as THREE from "three";

interface Polygon {
  vertices: number[][]; // Each vertex is [x, y, z]
  plane: number[]; // [a, b, c, d] plane equation (not used directly in this example)
}

export interface Solids {
  polygons: Polygon[];
  transforms: number[]; // A 4x4 matrix in flat array form (column-major order)
}

interface SolidsRendererProps {
  solids: Solids;
}

/**
 * Utility function to create a THREE.BufferGeometry from a polygon.
 * It uses fan‑triangulation: using the first vertex as a center.
 */
const createGeometryFromPolygon = (polygon: Polygon): THREE.BufferGeometry => {
  const vertices = polygon.vertices;
  const geometry = new THREE.BufferGeometry();

  if (vertices.length < 3) {
    return geometry;
  }

  const positions: number[] = [];
  // Fan triangulation: for vertices [v0, v1, v2, v3, ...]
  // create triangles: (v0, v1, v2), (v0, v2, v3), etc.
  for (let i = 1; i < vertices.length - 1; i++) {
    positions.push(...vertices[0], ...vertices[i], ...vertices[i + 1]);
  }

  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3),
  );
  geometry.computeVertexNormals();
  return geometry;
};

/**
 * Child component that renders a single polygon mesh.
 * It uses useMemo to avoid re-creating the geometry on every render.
 */
interface PolygonMeshProps {
  polygon: Polygon;
}

const PolygonMesh: React.FC<PolygonMeshProps> = ({ polygon }) => {
  const geometry = useMemo(() => createGeometryFromPolygon(polygon), [polygon]);

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color="orange" side={THREE.DoubleSide} />
    </mesh>
  );
};

export const SolidsRenderer: React.FC<SolidsRendererProps> = ({ solids }) => {
  const { polygons, transforms } = solids;

  // Create a matrix from the transforms array (assumed to be a 4x4 matrix)
  const transformMatrix = useMemo(() => {
    const matrix = new THREE.Matrix4();
    matrix.fromArray(transforms);
    return matrix;
  }, [transforms]);

  return (
    <Canvas camera={{ position: [0, 0, 50], fov: 60 }}>
      {/* Basic lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />

      {/* Apply the transform to the whole group */}
      <group matrix={transformMatrix}>
        {polygons.map((polygon, idx) => (
          <PolygonMesh key={idx} polygon={polygon} />
        ))}
      </group>
    </Canvas>
  );
};
