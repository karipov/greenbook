long duration; 
int distance; 

void setup() {
  pinMode(3, OUTPUT); // Sets the trigPin as an OUTPUT
  pinMode(2, INPUT); // Sets the echoPin as an INPUT
  pinMode(4, OUTPUT);
  Serial.begin(9600); 
 
}
void loop() {
  digitalWrite(3, LOW);
  delayMicroseconds(2);
  digitalWrite(3, HIGH);
  delayMicroseconds(10);
  digitalWrite(3, LOW);
  duration = pulseIn(2, HIGH);
  distance = duration * 0.034 / 2;

  if (distance < 8) {
    digitalWrite(4, HIGH);
  } else {
    digitalWrite(4, LOW);
  }
}