// 位置坐标
export interface Position {
  x: number;
  y: number;
}

// 移动方向
export const Direction = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
} as const;

export type Direction = typeof Direction[keyof typeof Direction];

// 蛇的状态
export interface SnakeState {
  body: Position[];      // 蛇身体各段的位置
  direction: Direction;  // 当前移动方向
  size: number;          // 蛇的长度
}

// 食物的状态
export interface FoodState {
  position: Position;    // 食物位置
}

// 游戏整体状态
export interface GameState {
  snake: SnakeState;     // 蛇的状态
  food: FoodState;       // 食物的状态
  score: number;         // 当前分数
  isGameOver: boolean;   // 游戏是否结束
  isPaused: boolean;     // 游戏是否暂停
}

// 游戏配置
export interface GameConfig {
  width: number;         // 游戏区域宽度（格子数）
  height: number;        // 游戏区域高度（格子数）
  cellSize: number;      // 每个格子的大小（像素）
  initialSpeed: number;  // 初始速度（毫秒/帧）
  speedIncrement: number; // 速度增量（每吃一个食物减少的毫秒数）
}