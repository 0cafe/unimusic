// 使用常量的好处:
//1.常量更容易避免程序出现错误。如果把一个值赋给程序中的一个常量，而该常量已经有一个值，编译器就回报告错误。
//2.在其多人协作的时候，方便统一管理，而且在其状态管理当中调用方法时一眼就是看出是其mutation里面的方法，有问题直接快速找到。
export const SET_INPLAY = 'SET_INPLAY'

export const SET_SONGLIST = 'SET_SONGLIST'

export const SET_PAUSED = 'SET_PAUSED'

export const PLAY = 'PLAY'
export const PAUSE = 'PAUSE'