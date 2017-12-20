export class Water{
    value:Watervalue;
}
class Watervalue{
    timeSeries: TimeSeries[];
}
class TimeSeries{
    sourceInfo: SourceInfo;
    variable: Variable;
    values: Values[];

}
class SourceInfo{
    siteName: string;
}
class Variable{
    variableName: string;
}
class Values{
    value: Value[];
}
class Value{
    value: string;
}