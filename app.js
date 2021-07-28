const objects = [
    {
        Name: 'Anuj Agarwal',
        Age:18,
        Profession: 'Programmer and a web developer',
        About: 'cheerful and a nice guy',
        image:'https://randomuser.me/api/portraits/men/85.jpg'
    


    },

    {
        Name: 'Bill gates',
        Age:65,
        Profession: 'founder of Microsoft',
        About: 'Bill gates is a technologist , bussiness leader and philanthropist',
        image:'https://randomuser.me/api/portraits/men/83.jpg'
    },
    {
        Name: 'Mark Zuckerberg',
        Age:37,
        Profession: 'Founder of Facebook',
        About: 'Mark zuckerberg is an American media magnate , internet entrepreneur and philanthrophist',
        image:'https://randomuser.me/api/portraits/men/84.jpg'
        
    },
    {
        Name: 'Elon Musk',
        Age:50,
        Profession: 'Founder and CEO of spaceX',
        About: 'Entrepreneur and a business formate',
        image:'https://randomuser.me/api/portraits/men/82.jpg'

    },
    {
        Name: 'Steve Jobs',
        Age:56,
        Profession: 'founder and CEO of Apple Inc',
        About: 'steve jobs was an american business magnate , industrial designer , invester , and media proprietor.',
        image:'https://randomuser.me/api/portraits/men/86.jpg'
        
    }
];

const profiles = profileIterator(objects);

// Call first profile
nextProfile();

document.getElementById('next').addEventListener('click' , nextProfile);

function nextProfile()
{
     const currentProfile = profiles.next().value;
     if(currentProfile !== undefined)
     {
    document.querySelector('.profileDisplay').innerHTML =  `
<ul class="list-group">
<li class= "list-group-item">Name: ${currentProfile.Name}
</li>
<li class= "list-group-item">Age: ${currentProfile.Age}
</li>
<li class= "list-group-item">Profession: ${currentProfile.Profession}
</li>
<li class= "list-group-item">About: ${currentProfile.About}
</li> `;

    document.querySelector('.imageDisplay').innerHTML = `<img src="${currentProfile.image}"></img>`;
     }
     else
     {
        window.location.reload();
     }
}

//profile iterator
function profileIterator(profiles)
{
    let nextIndex = 0;
 return {
     next:function()
      {

          return (nextIndex < profiles.length) ? { value: profiles[nextIndex++], done:false } : { done:true };

      }   
};
}