import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Services = () => {

    const image = {
        width: '400px', 
        height: '380px'
    }

    const title = {
        textAlign:'center',
        color:'black',
        fontSize:'28px',
        fontWeight:'bold'    
    }

    const text = {
      textAlign:'justify'
    
    }
  return (
    <div className="container">
   {/* sectio vegetables */}
        <div>
        <h1 style={{color:'green',textAlign:'center',fontweight: 'bolder'}}>Vegetables Section</h1>
        <CardGroup>
      <Card className="card p-5" style={{border:'none'}}>
        <Card.Img style={image} variant="top" src="https://images.pexels.com/photos/1367242/pexels-photo-1367242.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title style={title}>Tomatoes</Card.Title>
          <Card.Text style={{text}} >
          Small and sweet, perfect for snacking or salads.
          </Card.Text >
        </Card.Body>
      </Card>
      <Card className="card p-5" style={{border:'none'}}>
        <Card.Img style={image} variant="top" src="https://images.pexels.com/photos/1306559/pexels-photo-1306559.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title style={title}>Carrot </Card.Title>
          <Card.Text style={{text}}>
          Sweet and crisp,Good source of dietary fiber, which aids in digestion, High in vitamin A (from beta-carotene), which supports vision and immune function
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card p-5" style={{border:'none'}}>
        <Card.Img style={image} variant="top" src="https://images.pexels.com/photos/928251/pexels-photo-928251.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title style={title}>Garlic</Card.Title>
          <Card.Text style={{text}}>
          Good source of vitamins C and B6, and minerals like manganese and calcium.Widely used in cooking for its distinctive flavor. Can be used raw, sautéed, roasted, or added to sauces, soups, and marinades.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    <CardGroup>
      <Card className="card p-5" style={{border:'none'}}>
        <Card.Img style={image} variant="top" src="https://images.pexels.com/photos/209482/pexels-photo-209482.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title style={title}>Cabbage</Card.Title>
          <Card.Text style={{text}}>
          The most common variety, with a mild flavor and crunchy texture. Often used in salads, coleslaw, and soups. A healthy addition to many diets, low in calories and high in nutrients.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card p-5" style={{border:'none'}}>
        <Card.Img style={image} variant="top" src="https://images.pexels.com/photos/2583187/pexels-photo-2583187.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title style={title}>Ladyfingerse</Card.Title>
          <Card.Text style={{text}}>
          Used in a variety of dishes, particularly in Southern and Creole cooking, such as gumbo, stews, and fried okra.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card p-5" style={{border:'none'}}>
        <Card.Img style={image} variant="top" src="https://images.pexels.com/photos/45914/paprika-vegetables-food-market-45914.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title style={title}>Capsicum</Card.Title>
          <Card.Text style={{text}}>
          Mild and sweet peppers, available in various colors like green, red, yellow, and orange. They’re often used raw in salads or cooked in a variety of dishes.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
        
        </div>

{/* section fruits */}
      
      <h1 style={{color:'green',textAlign:'center',fontweight: 'bolder'}}>Fruits Section</h1>
      <div>
        <CardGroup>
      <Card className="card p-5" style={{border:'none'}}>
        <Card.Img style={image} variant="top" src="https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title style={title}>Oranges</Card.Title>
          <Card.Text style={{text}}>
          Known for their juiciness and used primarily for orange juice production.Oranges are famously high in vitamin C, which supports the immune system, skin health, and overall vitality.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card p-5" style={{border:'none'}}>
        <Card.Img style={image} variant="top" src="https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title style={title}>Kewi</Card.Title>
          <Card.Text style={{text}}>
          The most common variety, with a brown, fuzzy skin and bright green flesh with small black seeds. It has a tart-sweet flavor.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card p-5" style={{border:'none'}}>
        <Card.Img style={image} variant="top" src="https://images.pexels.com/photos/197907/pexels-photo-197907.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title style={title}>Grapes</Card.Title>
          <Card.Text style={{text}}>
          Sweet and often eaten fresh,Eaten fresh, used in salads, desserts, or as snacks. Grapes can be made into jams, jellies, and juices.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    <CardGroup>
      <Card className="card p-5" style={{border:'none'}}>
        <Card.Img style={image} variant="top" src="https://images.pexels.com/photos/65256/pomegranate-open-cores-fruit-fruit-logistica-65256.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title style={title}>Pomegranate</Card.Title>
          <Card.Text style={{text}}>
          Most commonly available in stores, these varieties have juicy, sweet-tart seeds known as arils.Rich in vitamins C and K, and provides some B vitamins and folate. Contains potassium and antioxidants. 
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card p-5" style={{border:'none'}}>
        <Card.Img style={image} variant="top" src="https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title style={title}>Apple</Card.Title>
          <Card.Text style={{text}}>
          Eaten fresh, added to salads, baked into pies, or used in sauces and jams. Apples are also used in savory dishes and desserts.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card p-5" style={{border:'none'}}>
        <Card.Img style={image} variant="top" src="https://images.pexels.com/photos/1231023/pexels-photo-1231023.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title style={title}>Strawberries </Card.Title>
          <Card.Text style={{text}}>
          Eaten fresh, added to salads, desserts, smoothies, or used in baking. Strawberries are also used to make jams, jellies, and sauces.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
     </div>
      
      {/* section dryFruits */}

      <h1 style={{color:'green',textAlign:'center',fontweight: 'bolder'}}>DryFruits Section</h1>
      <div>
        <CardGroup>
      <Card className="card p-5" style={{border:'none'}}>
        <Card.Img style={image} variant="top" src="https://images.pexels.com/photos/4753649/pexels-photo-4753649.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title style={title}>Almond</Card.Title>
          <Card.Text style={{text}}>
          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card p-5" style={{border:'none'}}>
        <Card.Img style={image} variant="top" src="https://images.pexels.com/photos/27644249/pexels-photo-27644249/free-photo-of-fresh-walnuts-at-the-market.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title style={title}>Walnuts</Card.Title>
          <Card.Text style={{text}}>
          This card has supporting text below as a natural lead-in to additional content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card p-5" style={{border:'none'}}>
        <Card.Img style={image} variant="top" src="https://images.pexels.com/photos/4931455/pexels-photo-4931455.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title style={title}>Pistachio</Card.Title>
          <Card.Text style={{text}}>
          This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    <CardGroup>
      <Card className="card p-5" style={{border:'none'}}>
        <Card.Img style={image} variant="top" src="https://images.pexels.com/photos/3993529/pexels-photo-3993529.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title style={title}>Cashew</Card.Title>
          <Card.Text style={{text}}>
          Most commonly available in stores,Rich in vitamins C and K, and provides some B vitamins and folate. Contains potassium and antioxidants. 
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card p-5" style={{border:'none'}}>
        <Card.Img style={image} variant="top" src="https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title style={title}>Apple</Card.Title>
          <Card.Text style={{text}}>
          Eaten fresh, added to salads, baked into pies, or used in sauces and jams. Apples are also used in savory dishes and desserts.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card p-5" style={{border:'none'}}>
        <Card.Img style={image} variant="top" src="https://images.pexels.com/photos/4499228/pexels-photo-4499228.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title style={title}>Raisins </Card.Title>
          <Card.Text style={{text}}>
          This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
     </div>
    </div>
  )
}

export default Services
