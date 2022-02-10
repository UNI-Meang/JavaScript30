# 초간단 메모장 만들기 ✏️

## ✨ KEY CODE
1. `setItem(key, value)` : 키와 값을 보관
2. `getItem(key, value)` : 
키에 해당하는 값을 받아옴
3. `removeItem(key)` : 키와 해당하는 값을 삭제함

* `localStorage`는 origin(domain, port, protocol)이 같은 경우 data가 모든 tab과 창에서 공유되고 새로고침을 할 경우에도 data 유지됨!
---

## 👩🏻‍💻 FULL CODE

### 1. click event

a. clear button click 시 localStorage에 저장되어있던 memo 내용이 삭제됨 :
`button onclick="localStorage.removeItem('memo');` 
<br>

b. memo 화면에 보여지는 내용도 삭제(비워주는) 코드 추가 :
`memo.value=''`
<br>

=> `button onclick="localStorage.removeItem('memo');memo.value=''"` 

### 2. localStorage

a. memo에 입력되는 값을 localStorage에 보관된 값을 받아와서 보여줌 :
`memo.value = localStorage.getItem('memo');`
<br>

b. memo에 텍스트를 입력하는 이벤트 발생 시 localStorage에 값을 보관 :
`memo.oninput = () => {
    localStorage.setItem('memo', memo.value)
};`


![761A7AF1-2A0E-4F8A-8527-02717A273727](https://user-images.githubusercontent.com/82393165/153224859-5e044675-d264-4b76-8657-d83f16cf7551.jpeg)
