import React from 'react';
import * as THREE from 'three';
import { useMount } from '@umijs/hooks';

interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  const wrapper = React.useRef<HTMLDivElement>();
  const initThree = React.useCallback(() => {
    if (wrapper.current) {
      const width = 500;
      const height = 500;
      // 创建一个场景
      const scene = new THREE.Scene();
      // 创建一个相机，并且设置大小
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      // 创建一个渲染器
      const renderer = new THREE.WebGLRenderer();
      // 设置渲染器的大小
      renderer.setSize(width, height);
      // 将渲染结果渲染至目标节点
      wrapper.current.appendChild(renderer.domElement);
      // 创建一个立方体
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      // 创建一个绿色材质
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      // 给对应物体增加材质
      const cube = new THREE.Mesh(geometry, material);
      // 将融合后的结果加入到场景内
      scene.add(cube);
      // 调整相机位置
      camera.position.z = 4;
      function animate() {
        requestAnimationFrame(animate);
        cube.rotation.y += 0.1;
        // cube.rotation.y += 0.1;
        renderer.render(scene, camera);
      }
      animate();
    }
  }, []);
  useMount(() => {
    initThree();
  });
  return <div ref={wrapper} />;
};

export default Index;
