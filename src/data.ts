// All portfolio content lives here so it can be updated without touching layout code.

export const gh = (repo: string) => `https://github.com/Sourav0607/${repo}`;

export const contact = {
  email: 'sourav.hawaldar@gmail.com',
  phone: '+49 155 1057 2355',
  phoneHref: 'tel:+4915510572355',
  linkedin: 'https://www.linkedin.com/in/sourav-hawaldar-2275591a1',
  github: 'https://github.com/Sourav0607',
};

// Marquee row 1: GitHub repository cards
export const marqueeRepos = [
  'ROS2-STUDIO', 'AMR_V1.0', 'VLN_BOT', 'Stereo_Vision_ROS2', 'Kuka-Moveit2', 'Humanoid', 'ROS2_CPP', 'Bumperbot',
];

// Marquee row 2: highlight tiles (big figure + caption)
export const marqueeHighlights: { big: string; small: string; hue: string }[] = [
  { big: '94%+', small: 'Radar–LiDAR material classification accuracy', hue: '#B600A8' },
  { big: 'ROS2', small: 'C++ & Python nodes, drivers and tooling', hue: '#7621B0' },
  { big: '~12 ms', small: 'Time-sync accuracy in a custom C++ driver', hue: '#BE4C00' },
  { big: 'MoveIt2', small: '6-axis arm integration for sensor calibration', hue: '#2F6FB0' },
  { big: '0.57 px', small: 'Stereo calibration reprojection error', hue: '#0F8F7E' },
  { big: '36★', small: 'ROS2 Studio, an official ROS2 Adopter', hue: '#B600A8' },
  { big: '10–15%', small: 'IMU noise & bias improvement via Allan deviation', hue: '#7621B0' },
  { big: 'Nav2', small: 'Autonomous navigation, SLAM & docking', hue: '#BE4C00' },
  { big: '95%+', small: 'Prediction reliability with OOD detection', hue: '#2F6FB0' },
  { big: '1.3', small: "Master's thesis grade (1.0 = best)", hue: '#0F8F7E' },
];

export const aboutText =
  "I'm a robotics software engineer with an M.Sc. in Mechatronics. I build ROS2 software in C++ and Python for perception, sensor fusion, calibration and robot manipulation, and I test it on real hardware. At Olive Robotics I lead a sensor calibration project with a 6-axis arm. Let's build robots that work outside the lab!";

export const expertise = [
  {
    name: 'Perception & Sensor Fusion',
    desc: 'Radar, LiDAR, IMU and camera pipelines in ROS2 with time-synchronised drivers, semantic mapping and deployed deep-learning classifiers.',
  },
  {
    name: 'Calibration & Validation',
    desc: 'Robot-arm-driven sensor calibration, Allan deviation analysis, motion-capture benchmarking, pytest regression suites and hardware release sign-off.',
  },
  {
    name: 'Robot Manipulation',
    desc: 'C++ ROS2 integration of industrial and 6-axis arms with MoveIt2 and ROS2 Control for collision-aware planning and pick-and-place.',
  },
  {
    name: 'Autonomous Navigation',
    desc: 'Mobile robots from CAD and URDF to SLAM, Nav2 and task planning, including ArUco docking and vision-language navigation.',
  },
  {
    name: 'ML & Computer Vision',
    desc: 'PyTorch, Scikit-Learn, YOLOv8 and OpenCV models that run on robots, with confidence calibration and out-of-distribution rejection.',
  },
];

export type Project = {
  name: string;
  category: string;
  repo?: string;
  link?: { href: string; label: string };
  metric: { big: string; small: string };
  summary: string;
  tags: string[];
  icon?: string;
};

export const projects: Project[] = [
  {
    name: 'ROS2 Studio',
    category: 'Open Source · Official ROS2 Adopter',
    repo: 'ROS2-STUDIO',
    metric: { big: '36★', small: 'GitHub stars · listed in ROS2 docs' },
    summary:
      'A PyQt5 GUI that runs as a native `ros2 studio` CLI extension: performance monitor, bag recorder and player (sqlite3/mcap), bag-to-CSV for ML datasets and a system dashboard. Recognised by the CTO of the Open Source Robotics Foundation.',
    tags: ['Python', 'PyQt5', 'rosbag2', 'ROS2 CLI'],
  },
  {
    name: 'IMU Terrain Detection',
    category: "Master's Thesis · Olive Robotics × RWU",
    metric: { big: '85%+', small: 'Accuracy on a real wheeled robot · Grade 1.3' },
    summary:
      'Real-time terrain recognition (grass, gravel, floor, asphalt, pavement, carpet) from Olixsense X1 Pro IMU data with time- and frequency-domain features and ensemble learning, deployed to ROS2 for navigation.',
    tags: ['ROS2', 'IMU', 'Ensemble Learning', 'Scikit-Learn'],
    icon: '🛞',
  },
  {
    name: '4-Wheeled AMR',
    category: 'Autonomous Navigation',
    repo: 'AMR_V1.0',
    metric: { big: 'Full stack', small: 'CAD → URDF → SLAM → task planning' },
    summary:
      'Designed in Fusion 360 and simulated in a custom Gazebo world with a diff-drive controller and self-written SLAM. Runs warehouse tasks with ArUco docking and battery-aware emergency charging.',
    tags: ['ROS2 Humble', 'Gazebo', 'SLAM', 'ArUco'],
  },
  {
    name: 'VLN Bot',
    category: 'Vision-Language Navigation',
    repo: 'VLN_BOT',
    metric: { big: 'LLM + Nav2', small: 'TinyLlama on Jetson Orin Nano' },
    summary:
      'Natural-language navigation with YOLOv8 detection, pixel-based depth estimation and Nav2 object-following with smart search recovery. Jetson and host communicate over ROS2 with Cartographer SLAM.',
    tags: ['Jetson', 'YOLOv8', 'Nav2', 'Cartographer'],
  },
  {
    name: 'Stereo Vision 3D',
    category: 'Computer Vision',
    repo: 'Stereo_Vision_ROS2',
    metric: { big: '0.57 px', small: 'Reprojection error · ~30 FPS depth' },
    summary:
      'Dual USB-camera stereo framework with automated calibration, SGBM + WLS filtering for dense depth maps, and coloured point clouds in Open3D.',
    tags: ['OpenCV', 'Calibration', 'Open3D', 'ROS2'],
  },
  {
    name: 'KUKA KR10 MoveIt2',
    category: 'Robotic Arm',
    repo: 'Kuka-Moveit2',
    metric: { big: 'Pick & place', small: 'Collision-aware planning with vision' },
    summary:
      'KUKA KR10 R1420 in URDF/Xacro with a 2-finger gripper and RGB camera. MoveIt2 and ROS2 Control handle planning, pick-and-place and vision-based box detection.',
    tags: ['MoveIt2', 'ROS2 Control', 'C++', 'URDF'],
  },
];

export type Job = {
  company: string;
  place: string;
  period: string;
  roles: { title: string; period?: string; points: string[] }[];
};

export const experience: Job[] = [
  {
    company: 'Olive Robotics GmbH',
    place: 'Munich, Germany',
    period: '06/2026 – Present',
    roles: [
      {
        title: 'Junior Robotics Development Engineer (part-time)',
        period: '09/2026 – Present',
        points: [
          'Leading a sensor calibration project end-to-end: C++ ROS2 nodes controlling a 6-axis robot arm with MoveIt2, test design and data analysis.',
          'Own pre-delivery validation of sensor hardware and regression testing of firmware/software patches with automated pytest suites and release sign-off.',
          'Traced five root causes of cross-machine ROS2 (CycloneDDS) discovery failures over VPN, across multicast, port allocation and Docker configuration.',
          'Leading an IMU benchmarking study against motion-capture ground truth and improved noise and bias metrics by 10–15% with Allan deviation analysis.',
        ],
      },
      {
        title: 'Robotics and AI Engineering Intern',
        period: '06/2026 – 08/2026',
        points: [
          'Built an FMCW radar + LiDAR fusion pipeline in ROS2 with a custom C++ driver (~12 ms time-sync accuracy).',
          'Trained a hybrid 1D CNN (PyTorch) for real-time material classification: 94%+ accuracy on independent held-out data.',
          'Added temperature scaling and Mahalanobis OOD detection for 95%+ prediction reliability, plus a semantic mapping node in RViz.',
        ],
      },
    ],
  },
  {
    company: 'Autecc (Automatisierungstechnik & Consulting)',
    place: 'Baienfurt, Germany',
    period: '07/2024 – 03/2025',
    roles: [
      {
        title: 'Werkstudent',
        points: [
          'Developed a hexapod robot platform: CAD design, URDF modelling and stability evaluation in simulation and real tests.',
          'Contributed to laser CNC development (CAD, electronics integration, assembly) and ROS2 testing workflows.',
        ],
      },
    ],
  },
  {
    company: 'Qualytech',
    place: 'Belagavi, India',
    period: '02/2023 – 04/2023',
    roles: [
      {
        title: 'Intern',
        points: [
          'Integrated sensors into automated production systems and built sensor-based predictive maintenance: +10% efficiency, −15% maintenance cost.',
        ],
      },
    ],
  },
];

export const education = [
  {
    degree: 'M.Sc. Mechatronics',
    grade: 'Grade 1.8',
    school: 'Hochschule Ravensburg-Weingarten (RWU), Germany',
    period: '09/2023 – 07/2026',
    note: 'Autonomous Robots · Machine Learning · Deep Learning · Lidar & Radar Systems · Computer Vision · Autonomous Driving · Control Engineering',
  },
  {
    degree: 'B.E. Mechanical Engineering',
    grade: 'CGPA 9.26/10',
    school: 'KLS Gogte Institute of Technology (VTU), Belagavi, India',
    period: '07/2019 – 06/2023',
    note: 'Best Research Project Award 2023',
  },
];

export const openSource = {
  title: 'ROS 2 Lyrical Luth release testing',
  text: 'Validated and reported on 20 issues across the stack and had a documentation fix merged upstream.',
  links: [
    { label: 'Issues tested', href: 'https://github.com/ros2/lyrical_tutorial_party/issues?q=is%3Aissue%20state%3Aclosed%20commenter%3ASourav0607' },
    { label: 'PR #6772', href: 'https://github.com/ros2/ros2_documentation/pull/6772' },
    { label: 'ROS2 Adopters', href: 'https://docs.ros.org/en/humble/The-ROS2-Project/Adopters.html' },
  ],
};

export const certificates = [
  'AI for Autonomous Vehicles and Robotics · University of Michigan',
  'Robotics & ROS2: Learn by Doing (Manipulators) · Udemy',
  'Mastering OpenCV with Python · OpenCV University',
  'GitLab CI/CD for DevOps · Udemy',
];

export const skills = [
  'C++', 'Python', 'ROS2', 'MoveIt2', 'Nav2', 'ROS2 Control', 'Gazebo', 'SLAM', 'DDS',
  'Sensor Fusion', 'Calibration', 'IMU · Radar · LiDAR', 'PyTorch', 'Scikit-Learn', 'OpenCV',
  'YOLOv8', 'Docker', 'pytest', 'GitLab CI/CD', 'Linux', 'Fusion 360', 'SolidWorks', 'CATIA V5',
];

export const roles = [
  'Robotics Software Engineer', 'Robotics Engineer', 'Perception & Sensor Fusion', 'Computer Vision',
  'Calibration · Test & Validation', 'Robotics Integration', 'Navigation', 'Robotic Arm', 'Autonomous Robots',
  'ML / AI Engineer', 'Automation', 'Mechatronics',
];
