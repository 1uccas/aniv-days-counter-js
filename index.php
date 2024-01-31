<?php 
include 'src/php/counter_days.php';
?>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
<link rel="stylesheet" href="src/styles/style.css">
<body class="bg-dark">
	<div class="master">
		<h1 id="h1">Faltam <?php echo returnDays(); ?> dias para seu aniversário</h1>
		<!--LOADING HAMSTER-->

		<div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
			<div class="wheel"></div>
			<div class="hamster">
				<div class="hamster__body">
					<div class="hamster__head">
						<div class="hamster__ear"></div>
						<div class="hamster__eye"></div>
						<div class="hamster__nose"></div>
					</div>
					<div class="hamster__limb hamster__limb--fr"></div>
					<div class="hamster__limb hamster__limb--fl"></div>
					<div class="hamster__limb hamster__limb--br"></div>
					<div class="hamster__limb hamster__limb--bl"></div>
					<div class="hamster__tail"></div>
				</div>
			</div>
			<div class="spoke"></div>
		</div>
	</div>
</body>