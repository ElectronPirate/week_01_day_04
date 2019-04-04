const band = {
  casting: [],
  addMember(member){
    band.casting.push(member);
  },
}

//   getTotal(){
//     let total = 0;
//     for (let member of band.casting) {
//       total += member.price;
//     }
//     return total;
//   }
// };

module.exports = band;
