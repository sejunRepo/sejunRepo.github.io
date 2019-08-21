---
layout: post
title:  "Personal Project/ 회원제 Social Networking Service"
categories: Other
tags: Other
author: sejin
thumbnail: "/assets/img/p_p/sns_p.png"
description: 독학으로 공부한 Node.js 와 MySQL을 활용하여 구현한 소셜네트워킹서비스입니다. 친구기능, 회원태그기능, 해쉬태그기능 등이 구현되어 있습니다.
skills: Node.js, MySQL, JQuery, CSS, Bootstrap4 
---

회원가입
============

![Image Alt 로그인]({{site.url}}/assets/img/p_p/sns_p.png){: width="30%" height="350"} 
![Image Alt 가입]({{site.url}}/assets/img/p_p/join1.png){: width="30%" height="350"} 
![Image Alt 가입2]({{site.url}}/assets/img/p_p/join_2.png){: width="30%" height="350"}

메인페이지
=======

### 메인페이지 전체 구성  

![Image Alt 로그인]({{site.url}}/assets/img/p_p/main1.png){: width="50%" height="500"}{:.p1image} 


![Image Alt 친구목록]({{site.url}}/assets/img/p_p/main_2.png){: width="30%" height="350"}{:.p1image}
![Image Alt 타임라인]({{site.url}}/assets/img/p_p/tm.png){: width="30%" height="350"}{:.p1image}    
 

**1.친구목록 Card**  


사용자의 전체 친구들의 썸네일과 상태메시지를 ul로 출력합니다.  

**2.타임라인 Card**    

타임라인 카드에서는 내 친구들과 나의 글을 모아서 출력해줍니다.  
작성시간과 현재시간의 차이에 따라 X 분전, X 시간전, X 일전 으로 작성시간을 출력합니다.  
타임라인 게시글은 스크롤이 최하단으로 이동할 때 마다 5개씩 로드합니다.  

  
   




### 타임라인 세부기능  

![Image Alt 타임라인전체]({{site.url}}/assets/img/p_p/tmlt.png){: width="30%" height="400"}{:.p1image}   
![Image Alt 해쉬태그검색]({{site.url}}/assets/img/p_p/tags.png){: width="30%" height="350"}{:.p1image}
![Image Alt 친구태그기능]({{site.url}}/assets/img/p_p/header_msg.png){: width="30%" height="350"}{:.p1image}
  


**1.해쉬태그 기능**  

글에는 글쓴이가 글을 등록할때 추가한 해쉬태그가 버튼으로 출력됩니다.  
해쉬태그를 클릭, 혹은 헤더 네비게이션바의 해쉬태그 검색창에 검색하면   
그림과 같이 해당 해쉬태그를 지닌 모든 글이 조회됩니다.  

**2.친구태그 기능** 

댓글을 작성할 때 @ 로 작성을 시작하면  
내 친구 목록에서 @이후의 문자로 시작하는 모든 친구들의 리스트가 출력됩니다.  

@친구아이디를 입력후 엔터키를 누르면 친구가 태그되며  
위 그림과같이 태그된 친구에게는 메시지가 전송되게 됩니다.  

전송된 메시지를 클릭시 해당 댓글이 있는 게시글로 이동하며, 메시지는 (읽음) 상태로 변경됩니다.



유저 개인페이지
======
![Image Alt 해쉬태그검색]({{site.url}}/assets/img/p_p/my_page.png){: width="30%" height="350"}{:.p1image}
![Image Alt 해쉬태그검색]({{site.url}}/assets/img/p_p/fr_page.png){: width="30%" height="350"}{:.p1image}
![Image Alt 해쉬태그검색]({{site.url}}/assets/img/p_p/not_fr.png){: width="30%" height="350"}{:.p1image}  
  
왼쪽부터 차례로 나의페이지, 친구인 유저의 페이지, 친구가 아닌 유저의 페이지 입니다.  


유저 페이지는 해당 유저의 친구목록과 게시글이 출력하고 친구가 아닐경우 친구신청 버튼을 제공합니다.  
  
게시글의 유저아이디나, 친구목록의 유저아이디등 어딘가에서든 유저의 아이디를 클릭하면 
해당 유저의 페이지로 이동되게 됩니다.    
이 페이지를 통하여 친구의 친구를 찾아내서 친구 신청을 할 수 있습니다. 




