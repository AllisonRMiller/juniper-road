import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Navbar, CardTitle, CardBody, CardText, Button, Container, Card, CardSubtitle, Badge, CardHeader } from 'reactstrap';
// import './App.css';

function Menu() {

const [loaded, setLoaded] = useState(false);

  const Menus = [
    { 
      number: 8, 
      name: "Breakfast" 
    }, { 
      number: 12, 
      name: "Appetizers" 
    }, { 
      number: 12, 
      name: "Lunch" 
    }, { 
      number: 16, 
      name: "Dinner" 
    }, { 
      number: 4, 
      name: "Cocktails" 
    }, { 
      number: 8, 
      name: "Dessert" 
    }
  ]


  useEffect((props) => {
    debugger;
    async function getStorage(x) {
      var prevMenu = JSON.parse(localStorage.getItem(x.name));
          if (prevMenu === null) {
            if (x.name=="Cocktails"){
              var newMenu=makeDrinks(x.number);
              newMenu.forEach((y) => {
                y.id = x.name + newMenu.indexOf(y);
                y.price = priceGenerator(5, 15)
            });
            var currentMenu = newMenu;
            }
            else{
              var newMenu = (await phoneHome(x.number));
              newMenu.forEach((y) => {
                  y.id = x.name + newMenu.indexOf(y);
                  y.price = priceGenerator(5, 15)
              });
              var currentMenu = newMenu;
          }}
          else {
              currentMenu = prevMenu
          }
          if (prevMenu === null) {
              localStorage.setItem(x.name, JSON.stringify(currentMenu))
          }
          
          if (x.name=="Lunch"){setLoaded(true)};
        }
        Menus.map(x=>getStorage(x))
        
  }, [Menus]);




  // call to API TODO: Make this trigger an error popup if the call fails
  async function phoneHome(x) {
    var link = "https://entree-f18.herokuapp.com/v1/menu/" + x;
    var res = "";
    await axios.get(link)
      .then(function (response) {
        res = response.data.menu_items;
        return (res)
      })
      .catch(function (error) {
        console.log(error)
      })
    // .finally(res=>{return (res)})
    return res;
  }
  // list of cocktails from a random cocktail generator
  function makeDrinks(x) {
    var drinks = [
      {
        name: "Gualala River",
        description: "Gin, pruno, and falernum with a dash of peach bitters and muddled cranberry"
      },
      {
        name: "Clusivity",
        description: "Gin, benedictine, meyer lemon juice, and muddled strawberry"
      },
      {
        name: "European Film Award for Best Actress",
        description: "Gin, red grapefruit juice, simple syrup, grapefruit bitters, and grated cinnamon"
      },
      {
        name: "Thomas Cawton",
        description: "Gin, rupy port, meyer lemon and key lime juices, cointreau, brown sugar, and a dash of grapefruit bitters"
      },
      {
        name: "Dir",
        description: "Gin, simple syrup, meyer lemon and key lime juices, strega, grated nutmeg, and muddled blackberry"
      },
      {
        name: "Bristlecone Pine",
        description: "Gin, ruby port, apple cider, key lime juice, peychaud bitters, mint leaves, and sweet champagne"
      },
      {
        name: "Thomas Carskadon",
        description: "Gin, bourbon, watermelon syrup, and a dash of peach bitters"
      },
      {
        name: "Suristan",
        description: "Gin, white vermouth, with orange, grapefruit, and whiskey bitters"
      },
      {
        name: "Mottle-backed Elaenia",
        description: "Gin, rye, falernum, and a dash of maraschino liqeur"
      },
      {
        name: "Ankerite",
        description: "Gin, ruby port, lemon juice, benedictine, tarragon, and a dash of grapefruit bitters"
      }
    ]

    // shuffles drink list
    for (let i = drinks.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = drinks[i];
      drinks[i] = drinks[j];
      drinks[j] = temp;
    }
    return drinks.slice(0, x)

  }

  // generates random prices with repeats
  function priceGenerator(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //generates title bars for menu sections
  function generateTitle(x){
    
    // debugger;

    return (
      <Container>
          <Row>
              <Col className="col-md-12">
                  <Navbar className="navbar navbar-expand-md navbar-dark bg-dark">
                      <h3 className="navbar-text mx-auto text-light mb-0">{x.name}</h3>
                  </Navbar>
                  <div className="border border-primary mt-0 mb-4">
                      <Container className="mt-4">
                          <Row className="mb-4">
                          {console.log(localStorage.getItem(x.name))}
                              {loaded && localStorage.getItem(x.name)!=null && JSON.parse(localStorage.getItem(x.name)).map(y => (generateDish(y)))}
                          </Row>
                      </Container>
                  </div>
              </Col>
          </Row>
      </Container>
  )

  }


  // generates cards with details for dishes TODO: fix price placement
  function generateDish(x) {

    if (x.name != null) {
      var name = x.name;
    }
    var text = x.description;
    var price = x.price;
    var id = x.id;
    return (
      <Col className="col-md-3" key={id} id={id}>
        <Card className="h-100">
          <CardBody>
            {name !=null &&<CardHeader><h5>{name}</h5></CardHeader>}
            <CardText>{text}</CardText>
            <CardText className="text-right">${price}</CardText>
          </CardBody>
        </Card>
      </Col>
    )
  }


  return (
    <div className="bg-light" id="Menu">

    {Menus.map(y=>generateTitle(y))}
    </div>
  );
}

export default Menu;
