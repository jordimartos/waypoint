var punto: Transform [];
var distancia: float = 1;
var velocidad: float = 5;

function Awake () 
{
if (punto.Length<=0)
	{
	enabled = false;
	Debug.LogWarning ("no hay puntos cargados + name");
	}
}

function OnDrawGizmos () {
	if (punto.Length > 0)
	{
	for (var i:int=0; i < punto.Length;i++)
		{
		if (i>0)
			{
			Gizmos.color=Color (.6,.6,1,.7);
			Gizmos.DrawLine(punto[i].position, punto[i-1].position);
			}
		}
	}
	
}
private var puntosiguiente: int=0;
function FixUpdate () {
	var checkpunto = Vector3.Distance (punto[puntosiguiente].position,transform.position);
	if (checkpunto>= distancia)
	{
	transform.LookAt (punto [puntosiguiente]);
	transform.position+= transform.forward*Time.deltaTime*velocidad;
	}
	else
	{
		if (puntosiguiente < punto.Length-1)
			{
			puntosiguiente ++;
			}
	}
	
}
