<template>
	<div class="hero is-medium is-dark is-medium">
		<div class="hero-body">
			<div class="container">
				<h1 class="title">
					Placar Geral
				</h1>
				<div class="notification">
					<table class="table is-striped is-fullwidth">
						<thead>
							<tr>
								<th><abbr title="Posicao">Posição</abbr></th>
								<th><abbr title="Jogador">Jogador</abbr></th>
								<th><abbr title="Ponto">Pontos</abbr></th>
							</tr>
						</thead>
						<tbody>
							<linha v-for='(jogador, i) in jogadores' :key='i' :jogador='jogador'>
							</linha>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import linha from './linha.vue';
	export default {
		props: ['websocket'],
		components: {
			'linha': linha
		},
		data () {
			return {
				jogadores: [
					{
						'posicao': 1,
						'nome': "felipe",
						'pontos': 54,
					},
					{
						'posicao': 2,
						'nome': "felipe",
						'pontos': 54,
					},
					{
						'posicao': 3,
						'nome': "felipe",
						'pontos': 54,
					},
					{
						'posicao': 4,
						'nome': "felipe",
						'pontos': 54,
					}
				]
			}
		}
	}
</script>

<style>
	tbody tr:nth-child(1), tr:nth-child(2), tr:nth-child(3) td {
		color: white;
		font-weight: bold;
		text-shadow: 0px 1px 1px #4d4d4d;
	}
	tbody tr:nth-child(1) td {
		background-color: gold;
	}
	tbody tr:nth-child(2) td {
		background-color: silver;
	}
	tbody tr:nth-child(3) td {
		background-color: #CD7F32;
	}
</style>
