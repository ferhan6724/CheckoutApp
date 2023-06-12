// ******selectors
const main = document.getElementById("products-preview")
document.getElementsByClassName
// ******** events
main.addEventListener("click", (e) => {
    if(e.target.classList.contains("fa-minus")) {
        if(e.target.nextElementSibling.innerText > 1) {
            e.target.nextElementSibling.innerText --
            e.target.closest(".main__product").querySelector(".main__product-line-price").innerText = (e.target.nextElementSibling.innerText * e.target.closest(".main__product-info").querySelector(".dollar").innerText).toFixed(2)
        }
    } else if (e.target.classList.contains("fa-plus")) {
        e.target.previousElementSibling.innerText ++;
        e.target.closest(".main__product").querySelector(".main__product-line-price").innerText = (e.target.previousElementSibling.innerText * e.target.closest(".main__product-info").querySelector(".dollar").innerText).toFixed(2)
    } else if (e.target.classList.contains("fa-trash-can")){
        if (confirm("are you sure???") == true){
       e.target.closest(".main__product").remove()
    }else {}
    }
})


PC117-Mustafa
  2 minutes ago
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #F5F5F5;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 1rem;
    background-color: white;
    color: orangered;
    border-bottom: 1px solid #CECDCD;
  }
  .header__title {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  .nav {
    padding: 0.2rem 1rem;
    background-color: white;
  }
  .nav__list {
    display: flex;
    padding: 0rem 3rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    list-style: none;
  }
  .nav__list--text {
    font-size: 22px;
    font-weight: 600;
  }
  .nav__list--text span {
    font-weight: 100;
    color: #9B9B9B;
  }
  .nav__list--btn {
    color: orangered;
    font-size: 14px;
    cursor: pointer;
  }
  .main {
    width: 100%;
    display: flex;
  }
  .main__products-preview {
    padding: 2rem;
    width: 75%;
  }
  .main__product-painel {
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
  }
  .main__title {
    padding: 1.2rem 0.5rem;
    font-size: 14px;
    line-height: 20px;
  }
  .main__product {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 2px solid #EEEEEE;
    width: 100%;
    height: 140px;
  }
  .main__figure {
    width: 104px;
    height: 104px;
    padding: 8px;
    background-color: #FFFFFF;
    border-radius: 5px;
    border: 1px solid #BDBDBD;
    margin-left: 0.5rem;
  }
  .main__img {
    width: 100%;
    height: 100%;
  }
  .main__product-info {
    display: flex;
    flex-direction: column;
    font-family: Mon, Arial, Helvetica, sans-serif;
    width: 100%;
    padding-left: 1rem;
  }
  .main__product-info--title {
    font-size: 16px;
    color: #4E5150;
    margin: 5px 0;
  }
  .main__product-price--text {
    font-size: 12px;
    color: #4E5150;
    margin: 5px 0;
  }
  .main__product-price--text strong {
    color: #F2994A;
    font-size: 16px;
    font-weight: 600;
  }
  .main__action {
    width: 100%;
    display: flex;
    padding-right: 1rem;
    justify-content: space-between;
  }
  .main__action--btn {
    display: flex;
    align-items: center;
  }
  .main__quantity-controller {
    border-radius: 1rem;
    border: 1px solid #DADADA;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 32px;
    width: 89px;
  }
  .main__quantity-controller--text {
    padding: 8px;
    font-size: 18px;
    font-weight: bold;
  }
  .main__product-removal {
    margin-left: 0.5rem;
  }
  .main__product-removal--btn {
    border: none;
    border-radius: 50%;
    background-color: #FFEFE5;
    cursor: pointer;
  }
  .main__product-removal--btn i:hover {
    color: white;
    border-radius: 50%;
    background-color: #FF7623;
  }
  .main__product-line-price {
    font-weight: bold;
  }
  .main__total {
    padding: 2rem;
    width: 23%;
  }
  .main__summary {
    width: 100%;
    padding: 1rem;
    border: 1px solid #BDBDBD;
    background-color: #FFFFFF;
    height: 224px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 0.5rem;
  }
  .main__summary--responsive{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 0.5rem;
  }
  .main__sum-price {
    text-align: center;
    padding-bottom: 0.5rem;
  }
  .main__sum-title {
    color: orangered;
    text-align: center;
    padding-bottom: 0.5rem;
  }
  .main__order-btn {
    background-color: orangered;
    border: none;
    width: 80%;
    height: 40px;
    margin: 0 auto;
    border-radius: 1rem;
    color: white;
    cursor: pointer;
    text-align: center;
  }
  .main__summary--info {
    display: flex;
    justify-content: space-between;
    color: #646464;
  }
  /* Genel */
  .line-through {
    text-decoration: line-through;
  }
  i {
    color: #FF7623;
    padding: 0.5rem;
    cursor: pointer;
  }
  .main__quantity-controller i:hover {
    background-color: #FFEFE5;
    border-radius: 50%;
  }
  span {
    cursor: pointer;
  }
  .dollar::after {
    content: " $";
  }
  @media only screen and (max-width: 1150px) {
    .nav__list {
      padding: 0rem 1rem;
    }
    .main {
      display: block;
      margin: auto;
      position: relative;
    }
    .main__products-preview {
      width: 100%;
    }
    .main__total {
      width: 100%;
      position: sticky;
      bottom: 0;
    }
    .main__summary {
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      height: 25vh;
    }
    .main__summary--responsive {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .main__order-btn {
      width: 25%;
      margin: 0;
    }
    #total-info {
      width: 100%;
    }
    .main__summary--info {
      width: 100%;
    }
  }