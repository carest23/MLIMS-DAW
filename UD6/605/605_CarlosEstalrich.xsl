<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:template match="museums">
    <museums>
        <xsl:apply-templates />
    </museums>
</xsl:template>

<xsl:template match="museum">
    <museum>
        <name>
            <xsl:attribute name="name">
                <xsl:value-of select="name" />
            </xsl:attribute>
        </name>
        <location>
            <xsl:attribute name="city">
                <xsl:value-of select="city" />
            </xsl:attribute>
        </location>
        <country>
            <xsl:attribute name="country">
                <xsl:value-of select="country" />
            </xsl:attribute>
        </country>
    </museum>
</xsl:template>

</xsl:stylesheet>