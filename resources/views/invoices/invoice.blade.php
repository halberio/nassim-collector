<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example 1</title>
  <style>
    body {
      margin: 0;
    }

    .clearfix:after {
      content: "";
      display: table;
      clear: both;
    }

    a {
      color: #04357C;
      text-decoration: underline;
    }


    header {
      padding: 10px 0;
      margin-bottom: 30px;
    }

    #logo {
      text-align: center;
      margin-bottom: 10px;
    }

    #logo img {
      width: 90px;
    }

    h1 {
      border-top: 1px solid #36c6f4;
      border-bottom: 1px solid #36c6f4;
      color: #151515;
      font-size: 2em;
      line-height: 1.4em;
      font-weight: normal;
      text-align: center;
      margin: 0 0 10px 0;
    }


    .project span {
      white-space: nowrap;
      color: #5D6975;
      text-align: right;
      width: 52px;
      margin-right: 10px;
      display: inline-block;
      font-size: 0.8em;
    }

    .project div,
    .company div {
      white-space: nowrap;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
      margin-bottom: 10px;
    }

    table tr:nth-child(2n-1) td {
      background: #708599;
    }

    table th,
    table td {
      text-align: center;
    }

    table th {
      padding: 5px 10px;
      color: #5D6975;
      border-bottom: 1px solid #C1CED9;
      white-space: nowrap;
      font-weight: normal;
    }

    table .product,
    table .desc {
      text-align: left;
    }

    table .total {
      text-align: right;
    }

    table td {
      padding: 10px;
      text-align: right;
    }

    table td.product,
    table td.desc {
      vertical-align: top;
    }

    table td.price,
    table td.qty,
    table td.total {
      font-size: 1.2em;
    }

    table td.price {
      text-align: center;
    }

    table td.grand {
      border-top: 1px solid #36c6f4;;
    }

    table td.qty {
      text-align: center;
    }

    table td.subtotal, .tax {
      font-size: 0.9rem;
    }

    footer {
      color: #36c6f4;
      width: 100%;
      height: 30px;
      position: absolute;
      bottom: 0;
      border-top: 1px solid #C1CED9;
      padding: 8px 0;
      text-align: center;
    }
  </style>
</head>
<body>
<header class="clearfix">

  <h1>Facture #{{$data["invoice"]->reference}}</h1>




</header>
<main>
  <div class="project" style="display: block;margin-bottom: 2rem">
    <div><span>Fournisseur</span> {{$data["provider"]->name}}</div>
    <div><span>TEL</span> {{$data["provider"]->tel_number}}</div>
    <div><span>TEL portable</span> {{$data["provider"]->phone_number}}</div>
    <div><span>Matricule fiscal</span> {{$data["provider"]->mat}}</div>
  </div>
  <div class="project" style="display: block; margin-bottom: 2rem">
    <div><span>Achété de </span> {{$data["providerFrom"]->name}}</div>
    <div><span>TEL</span> {{$data["providerFrom"]->tel_number}}</div>
    <div><span>TEL portable</span> {{$data["providerFrom"]->phone_number}}</div>
    <div><span>Matricule fiscal</span> {{$data["providerFrom"]->mat}}</div>
  </div>
  <table>
    <thead>
    <tr>
      <th class="product">Produit</th>
      <th>Prix</th>
      <th>QTY</th>
      <th class="total">TOTAL</th>
    </tr>
    </thead>
    <tbody>
    @foreach( $data["products"] as $product)
      <tr>
        <td class="product">{{$product->name}}</td>
        <td class="price">{{$product->price}}</td>
        <td class="qty">{{$product->qty}}</td>
        <td class="total">{{$product->qty * $product->price }}</td>
      </tr>
    @endforeach
    <?php
    function calcul($products)
    {
      $amount = 0;
      foreach ($products as $product) {
        $amount = $amount + $product->price * $product->qty;
      }
      return $amount;
    }
    ?>
    <tr>
      <td colspan="3" class="subtotal">SUBTOTAL</td>
      <td class="total">{{calcul($data["products"])}}</td>
    </tr>
    <tr>
      <td colspan="3" class="tax">TAX 0%</td>
      <td class="total">0</td>
    </tr>
    <tr>
      <td colspan="3" class="grand total">GRAND TOTAL</td>
      <td class="grand total">{{calcul($data["products"])}}</td>
    </tr>
    </tbody>
  </table>

</main>
<footer>
  Lorem ipsum dolor sit amet, decore animal reprehendunt usu te. Veri percipitur eum ex, pri homero disputationi ea. Eam
  essent aliquip ne, qui id nullam aliquando.
</footer>
</body>
</html>
