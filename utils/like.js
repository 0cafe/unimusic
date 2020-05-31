export function pushLikeList(inPlay){
	if(!inPlay.play_url){
		return
	}
	let likeList = uni.getStorageSync('like_songList')
	let isExits = false
	likeList.forEach((item,i)=>{
		if(item.id == inPlay.id){  // 已有这首歌,再点击喜欢则删除
			likeList.splice(i,1)
			isExits = true
		}
	})
	if(!isExits){   //没有重复,添加进歌单 返回true
		likeList.push(inPlay)
		uni.setStorageSync('like_songList',likeList)
		return true
	}else{
		uni.setStorageSync('like_songList',likeList)
		return false
	}
}